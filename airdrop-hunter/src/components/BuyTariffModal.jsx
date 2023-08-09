import React, { useState, useEffect } from 'react'
import { useBalance, useAccount } from 'wagmi'
import { buy, getBalance } from '../shared/methods.js';
import style from './componentsStyles/popUp.module.css'
import bsc from '../localimg/bsc.svg'
import poligon from '../localimg/poligon.svg'
import eth from '../localimg/ethereum.svg'
import usdt from '../localimg/usdt.svg'
export default function BuyTariffModal({Close,isOpen,tarifPrice,accounts,name}) {
    const {address} = useAccount();
    const [balance, setBalance] = useState(0)
    useEffect(() => {
        if (address) {
            getBalance(address).then(item => {
                setBalance(parseInt(item/ 10n ** 18n));
            })
        } else {
            setBalance(0)
        }
    }, [address])

    if(!isOpen) return null
  return (
    <div onClick={Close} className={style.overlay}>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.container_buy_tarif}>
            <div className={style.top_layer}>
                <p className={style.buytarif_description}>Payment from you access balance</p>
                <div onClick={Close} className={style.clost_btn_outlayer}>
                    <div  className={style.close_btn}>
                        <div className={style.close_btn_item1}/>
                        <div className={style.close_btn_item2}/>
                    </div>
                </div>
            </div>
            <p className={style.buytarif_description}>You pay $ {tarifPrice} to get tarif '{accounts} accounts' in possible AirDrop {name}</p>
            <div className={style.grp}>
                <div className={style.grp_row}>
                    <div className={style.row_name}>
                        <p></p>
                    </div>
                    <span className={style.row_mid_title}>Balance</span>
                    <div className={style.row_btn_dsbld}></div>
                </div>
                <div className={style.grp_row}>
                    <div className={style.row_name}>
                        <img src={usdt} alt="" />
                        <p>USDT</p>
                    </div>
                    <span className={style.row_mid}>{balance}</span>
                    <button className={style.row_btn} onClick={() => buy(tarifPrice, address)}>Pay</button>
                </div>
            </div>
            <div className={style.check_area}>
                <input type="checkbox" />
                <p>i agree with the</p>
                <a href="">agreement</a>
            </div>
        </div>
    </div>
  )
}
