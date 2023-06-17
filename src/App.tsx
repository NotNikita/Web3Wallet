import { useState } from "react";
import { getBalance } from "./wallet/wallet";
import "./components/Button.css";
import "./components/Input.css";
import "./components/Logo.css";
import "./App.css";
import { NetworkInfo } from "./components/networkInfo";
import { networks } from "./constants/networks";

function App() {
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [network, setNetwork] = useState<string>("Ethereum Mainnet");

  const onGetBalanceClick = () => {
    if (!address) return;
    getBalance(address, network).then((res?: string) => {
      if (res) {
        setBalance(res);
      } else {
        setBalance("");
      }
    });
  };

  const getTokenNameByNetwork = () => networks[network].tokenName;

  return (
    <div className="App">
      <header className="App-header">
        <div className="🤚">
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="🌴"></div>
          <div className="👍"></div>
        </div>
        <NetworkInfo network={network} onChangeNetwork={setNetwork} />
        <input
          type="text"
          name="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input"
          placeholder="Username"
        />
        {balance && (
          <p>
            Wallet balance {address}: {balance} {getTokenNameByNetwork()}
          </p>
        )}
        <button className="button" onClick={onGetBalanceClick}>
          Get my balance
        </button>
      </header>
    </div>
  );
}

export default App;
