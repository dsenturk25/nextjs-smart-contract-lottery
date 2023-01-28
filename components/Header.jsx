
import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div className="flex flex-row justify-between p-10 border-y-2">
      <h1 className="text-2xl"> Decentralized Lottery </h1>
      <ConnectButton moralisAuth={false} />
    </div>
  )
}
