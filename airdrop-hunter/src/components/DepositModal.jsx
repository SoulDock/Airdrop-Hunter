import React, { useState } from 'react'
import style from './componentsStyles/popUp.module.css'
import amounts from '../Amounts.json'
import usdtIcon from '../localimg/usdt.svg'
import usdcIcon from '../localimg/usdc.svg'
import daiIcon from '../localimg/dai.svg'
export default function DepositModal({open, onClose}) {
    const [isPoligon, setPoligon] = useState(true)
    const [isBsc, setBsc] = useState(false)
    const [isAmount, setAmount] = useState("50")
    if(!open) return null
  return (
    <div onClick={onClose} className={style.overlay}>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.modal_container}>
            <div className={style.top_layer}>
                <div className={style.deposit_title_wrapper}>
                    <h3>Deposit (USED ONLY FOR ACCOUNT SUBSCRIPTION!)</h3>
                    <div className={style.deposit_subtitle}>
                        <p>More Detail, how to use the platfrom:</p>
                        <a href="">EN</a>
                        <span>|</span>
                        <a href="">RU</a>
                    </div>
                </div>
                <div onClick={onClose} className={style.clost_btn_outlayer}>
                    <div  className={style.close_btn}>
                        <div className={style.close_btn_item1}></div>
                        <div className={style.close_btn_item2}></div>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div>
                    <p>Acces balance: 0 $</p>
                    <div className={style.select_amount}>
                        <div>
                            <p className={style.amout_title}>Selected Amount {isAmount} $: </p>
                            <div className={style.amout_btn_wrapper}>
                            {amounts.map((item,i)=>(
                                <button
                                 key={i} 
                                 className={style.amount_btn} 
                                 onClick={()=>setAmount(item.amount)}>{item.amount}</button>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.select_net}>
                        <button 
                        className={style.net_button}
                        onClick={()=>{setPoligon(true);setBsc(false)}}
                        style={isPoligon?{backgroundColor:"#EFEFEF"}:{backgroundColor:"transparent"}}
                        >Poligon</button>
                        <button 
                        className={style.net_button}
                        onClick={()=>{setBsc(true);setPoligon(false)}}
                        style={isBsc?{backgroundColor:"#EFEFEF"}:{backgroundColor:"transparent"}}
                        >BSC</button>
                    </div>
                </div>
                <div className={style.connect_wallet}>
                    <div className={style.connect_wallet_wrapper}>
                        <div className={style.connect_item}>
                            <img src={usdtIcon} alt="" />
                            <div>
                                <h4>USDT</h4>
                                <p>Balance: 0</p>
                                <p>Allowance: 0</p>
                            </div>
                        </div>
                        <button className={style.connect_btn}>Connect Wallet</button>
                    </div>
                    <div className={style.connect_wallet_wrapper}>
                        <div className={style.connect_item}>
                            <img src={usdcIcon} alt="" />
                            <div>
                                <h4>USDC</h4>
                                <p>Balance: 0</p>
                                <p>Allowance: 0</p>
                            </div>
                        </div>
                        <button className={style.connect_btn}>Connect Wallet</button>
                    </div>
                    <div className={style.connect_wallet_wrapper}>
                        <div className={style.connect_item}>
                            <img src={daiIcon} alt="" />
                            <div>
                                <h4>DAI</h4>
                                <p>Balance: 0</p>
                                <p>Allowance: 0</p>
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
