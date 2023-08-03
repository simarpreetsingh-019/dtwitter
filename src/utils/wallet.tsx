// TODO 2.a - Setup a Beacon Wallet instance

import { NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
  name : "Tezos Twitter",
  preferredNetwork : NetworkType.GHOSTNET
})
// initialise the app's name and setting the choice of network we want our operations to run on


// TODO 2.b - Complete connectWallet function (for ghostnet)
export const connectWallet = async () => {
  await wallet.requestPermissions({
    network : {type : NetworkType.GHOSTNET}
  })  
};

// requesting permission from user that when he clicks cinnect wallet, then it will be connecting to the given network.

// TODO 2.c - Complete getAccount function
export const getAccount = async () => {

  const connectedWallet = await wallet.client.getActiveAccount();

  if(connectedWallet)
  {
    return connectedWallet.address
  }
  else{
    return "";
  }
 
};
// getAccount will check if connect wallet is called, and if it is called and wallet is connected , then we will fetch the client's active account, and return the active account's address 
 
// next step :  go to tezos.tsx and tell the toolkit from where the txn is comming from( the user detail and network)