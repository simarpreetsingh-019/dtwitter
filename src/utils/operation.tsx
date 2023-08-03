// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation
import { tezos } from "./tezos";
import { getAccount } from "./wallet";

export const updateContent = async (addEntry : string) => {
  // var addEntry, addAuthor;
  const addAuthor = await getAccount()

  try{
  const contract = await tezos.wallet.at("KT1D4s3yi5rn2RUnxmW2C6eBTaJ9WD1oqHT6");
    console.log("test1" + addEntry + " " + addAuthor);
  const op = await contract.methods.default(addAuthor, addEntry).send();
  console.log("test2");
  await op.confirmation(1);
  }
  catch(error){
    throw error;
  }
  
   
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const endGameOperation = async () => {
   
};
