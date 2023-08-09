import { contractShop, contractUSDT } from './contract.js';
import web3 from './web3';
import { addressShop } from './constants/contracts';

export async function buy(amount, address) {
  const amountString = web3.utils.toWei(amount.toString(), 'ether');
  await contractUSDT.methods.approve(addressShop, amountString).send({ from: address});
  await contractShop.methods.buy(amountString).send({ from: address})
}

export async function getBalance(address) {
  const result = await contractUSDT.methods.balanceOf(address).call({ from: address});
  return result;
}
