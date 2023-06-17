import Web3 from "web3";
import { networks } from "../constants/networks";

let web3: Web3 | undefined;

const setSelectedWeb3 = (web3Name: string = "Ethereum Mainnet"): void => {
  const networkLink = networks[web3Name].link;
  web3 = new Web3(networkLink);
};

export async function getBalance(address: string, networkName: string) {
  setSelectedWeb3(networkName);
  if (web3) {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, "ether");
  }
}
