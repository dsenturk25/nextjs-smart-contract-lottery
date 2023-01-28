
// have a function to enter the lottery

import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants/index";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CreditCardIcon, Info, useNotification } from "web3uikit"

export default function LotteryEntrance () {

  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  const [entranceFee, setEntranceFee] = useState("0"); // second param sets the function 0 is the initial value
  const [numPlayers,  setNumPlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("0");

  const dispatch = useNotification(); // pop-up

  const { runContractFunction: enterRaffle, isLoading, isFetching } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    params: {},
    functionName: "enterRaffle",
    msgValue: entranceFee
  })

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    params: {},
    functionName: "getEntranceFee",
  })

  const { runContractFunction: getNumPlayers } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    params: {},
    functionName: "getNumberOfPlayers",
  })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    params: {},
    functionName: "getRecentWinner",
  })

  const updateUI = async () => {
    const entranceFeeFromCall = (await getEntranceFee()).toString();
    const numPlayersFromCall = (await getNumPlayers()).toString();
    const recentWinnerFromCall = (await getRecentWinner()).toString();

    setEntranceFee(entranceFeeFromCall);
    setNumPlayers(numPlayersFromCall);
    setRecentWinner(recentWinnerFromCall);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      listenForWinnerPicked();
      updateUI();
    }
  }, [isWeb3Enabled])

  const handleSuccess = async (tx) => {
    await tx.wait(1);
    handleNewNotification(tx);
    updateUI();
  }

  const handleNewNotification = () => {
    dispatch({
      type: "info",
      message: "Transaction complete!",
      title: "Tx Notification",
      position: "topR",
      icon: "🔔"
    })
  }

  const listenForWinnerPicked = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const raffle = new ethers.Contract(raffleAddress, abi, provider);

    await new Promise((resolve, reject) => {
      try {
        
        raffle.once("winnerPicked", () => {
          updateUI();
          resolve();
        })
      } catch (e) {
        reject(e);
      }
    });

  }
  

  return (
    <div className="p-10">
      <div>Hello from lottery entrance!</div>
      {chainId in contractAddresses 
        ? (
            <div>
              <button 
                className="p-2 bg-blue-500 rounded text-white hover:bg-blue-600 px-5"
                onClick={async () => {

                  await enterRaffle({
                    onSuccess: handleSuccess, // automatically passes tx as it is called inside the tx function
                    onError: (error) => console.log(error)
                  });
                }}
              >{
                (isLoading || isFetching) ? <div className="animate-spin h-6 w-6 border-b-2 rounded-full"></div> : <div>Enter Raffle</div>
              }</button>
              <div>Entrance fee: {ethers.utils.formatEther(entranceFee)} ETH</div>
              <div>Number of players: {numPlayers}</div>
              <div>Recent winner address: {recentWinner}</div>
            </div>
          )
        : (<div>Network not supported</div>)}
    </div>
  )

}
