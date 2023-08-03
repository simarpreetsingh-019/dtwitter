// TODO 8 - Fetch storage of the Lottery by completing fetchStorage

import axios from "axios"; 

export const fetchStorage = async() => {
  const res = await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1D4s3yi5rn2RUnxmW2C6eBTaJ9WD1oqHT6/storage");

  console.log("test.data ", res.data);
  return res.data;

}
