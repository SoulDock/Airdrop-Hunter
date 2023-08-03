import React from 'react'
import style from './componentsStyles/popUp.module.css'
import usdtIcon from '../localimg/usdt.svg'
import usdcIcon from '../localimg/usdc.svg'
import daiIcon from '../localimg/dai.svg'
export default function DepositModal({open, onClose}) {
    if(!open) return null
  return (
    <div onClick={onClose} className={style.overlay}>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.modal_container}>
            <div className={style.top_layer}>
                <h3>Deposit (USED ONLY FOR ACCOUNT SUBSCRIPTION!)</h3>
                <span onClick={onClose}>X</span>
            </div>
            <div className={style.content}>
                <div>
                    <p>Acces balance: 0 $</p>
                    <div></div>
                </div>
                <div className={style.connect_wallet}>
                    <div className={style.connect_wallet_wrapper}>
                        <div className={style.connect_item}>
                            <img src={usdtIcon} alt="" />
                            <div>
                                <h4>USDT</h4>
                                <p>Balance: 0</p>
                                <p>Allowance</p>
                            </div>
                        </div>
                        <button className={style.connect_btn}>Connect Wallet</button>
                    </div>
                    <div className={style.connect_wallet_wrapper}>
                        <div className={style.connect_item}>
                            <img src={usdtIcon} alt="" />
                            <div>
                                <h4>USDT</h4>
                                <p>Balance: 0</p>
                                <p>Allowance</p>
                            </div>
                        </div>
                        <button className={style.connect_btn}>Connect Wallet</button>
                    </div>
                    <div className={style.connect_wallet_wrapper}>
                        <div className={style.connect_item}>
                            <img src={usdtIcon} alt="" />
                            <div>
                                <h4>USDT</h4>
                                <p>Balance: 0</p>
                                <p>Allowance</p>
                            </div>
                        </div>
                        <button className={style.connect_btn}>Connect Wallet</button>
                    </div>
                    <div>
                        <p>Access balance by network: - $</p>
                        <p>* Pay to the network where you already have a balance. To purchase services, balances in different networks are not combined.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
