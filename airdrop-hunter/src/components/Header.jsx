import React, { useEffect, useState, useRef } from 'react'
import style from './componentsStyles/header.module.css'
import DepositModal from './DepositModal'
export default function ({open, onClose}) {
    const [isMenu, setMenu] = useState(false)
    const [isInfoModal, setInfoModal] = useState(false)
    const toggleMenu = ()=>{
        isMenu ? setMenu(false) : setMenu(true)
    }
    let menuRef = useRef()
    useEffect(()=>{
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setMenu(false)
            }
        }
        document.addEventListener("mousedown", handler)
    })
  return (
    <div className={style.header}>
        <DepositModal open={isInfoModal} onClose={()=>setInfoModal(false)}/>
        <div className={style.beta_text}>This project is beta. DYOR</div>
        <div className={style.header_inner}>
            <div className={style.header_title}>
                <h3 className={style.header_title_text}>AIRDROP</h3 >
                <h3 className={style.header_title_text} style={{color:"#23ACDE"}}>HUNTER</h3 >
            </div>
            <div className={style.header_info}>
                <button onClick={()=>setInfoModal(true)} className={style.deposit_btn}>Deposit</button>
                <div className={style.connect_button_wrapper}>
                    <button className={style.wallet_btn}>Connect Wallet</button>
                    <p>0.00029141BNB</p>
                </div>
                <div ref={menuRef} className={style.menu_wrapper}>
                    <div  onClick={()=>toggleMenu()} className={style.menu}>
                        <div className={style.menu_decoration_item}/>
                        <div className={style.menu_decoration_item}/>
                        <div className={style.menu_decoration_item}/>
                    </div>
                    {isMenu?
                    <div className={style.pop_menu}>
                        <a className={style.menu_link} href="">Refferal</a>
                        <a className={style.menu_link} href="">About</a>
                        <a className={style.menu_link} href="">Theme</a>
                        <a className={style.menu_link} href="">Twitter</a>
                        <a className={style.menu_link} href="">Telegram</a>
                        <a className={style.menu_link} href="">Support</a>
                        <a className={style.menu_link} href="">ChangeLog</a>
                    </div>
                    :
                    <div className={style.pop_menu_hidden}></div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
