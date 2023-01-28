
// Manual / harder way for web3 connection

import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function Header() {

  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading } = useMoralis();

  useEffect(() => {

    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }

  }, [isWeb3Enabled])
  // automatically runs on load
  // then runs checking the value 
  // no dependency array --> runs on every re-render
  // blank dependency array runs only once

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3(); // set isWeb3Enabled to false
      }
    })
  }, [])
  // Another useEffect to check for disconnect

  return (
    <div>

      {account ? (<div>Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}</div>) :
        (<button disabled={isWeb3EnableLoading} onClick={async () => {
          await enableWeb3()
          window.localStorage.setItem("connected", "injected"); // injected web 3 wallet
        }} >Connect</button>)}

    </div>);
}
