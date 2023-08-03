// TODO 1 - Setup Tezos Toolkit

import { TezosToolkit } from "@taquito/taquito";
import { wallet } from "./wallet";

export const tezos = new TezosToolkit("https://ghostnet.smartpy.io");

// TODO 3 - Specify wallet provider for Tezos instance

tezos.setWalletProvider(wallet)

//it will let the toolkit that the txn and interaction is coming from the particular wallet.

// next step -> go to Navbar.tsx ,
// now make the function onConnectWallet which will complete the connect wallet button interaction