import React from 'react'
import style from './componentsStyles/header.module.css'
export default function () {
  return (
    <div className={style.header}>
        <div className={style.beta_text}>This project is beta. DYOR</div>
        <div className={style.header_inner}>
            <div className={style.header_title}>
                <h3 className={style.header_title_text}>AIRDROP</h3 >
                <h3 className={style.header_title_text} style={{color:"#23ACDE"}}>HUNTER</h3 >
            </div>
            <div className={style.header_info}>
                <button className={style.deposit_btn}>Deposit</button>
                <button className={style.wallet_btn}>Connect Wallet</button>
                <div className={style.menu}>
                    <div className={style.menu_decoration_item}></div>
                    <div className={style.menu_decoration_item}></div>
                    <div className={style.menu_decoration_item}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
