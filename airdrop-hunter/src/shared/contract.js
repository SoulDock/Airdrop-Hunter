import web3 from './web3';
import { addressUSDT, addressShop } from './constants/contracts';
import shopAbi from './abi/shopAbi.json';
import usdtAbi from './abi/usdtAbi.json';

export const contractShop = new web3.eth.Contract(shopAbi, addressShop);
export const contractUSDT = new web3.eth.Contract(usdtAbi, addressUSDT);
