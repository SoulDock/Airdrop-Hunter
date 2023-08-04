import React, { useState } from 'react'
import style from './componentsStyles/popUp.module.css'
import options from '../Options.json'
import BuyTariffModal from './BuyTariffModal';
export default function DetailModal({open, onClose}) {
    const [isBuyModal,setBuyModal] = useState(false)
    const [isOption, setOption] = useState([
        {position: '1', text: 'Generation of wallets according to the tariff'}]);
    const [isSubtext, setSubtext] = useState("Automatic generation occurs after payment of the tariff")
    if(isBuyModal){
        return <BuyTariffModal isOpen={isBuyModal} Close={()=>setBuyModal(false)}></BuyTariffModal>
    }
    else if(!open)
    {return null} 
  return (
    <div onClick={onClose} className={style.overlay}>
        <BuyTariffModal isOpen={isBuyModal} Close={()=>setBuyModal(false)}></BuyTariffModal>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.modal_container_details}>
            <div className={style.top_layer}>
                <h3>Detailed information</h3>
                <span onClick={onClose}>X</span>
            </div>
            <div className={style.details_wrapper}>
                <div className={style.details_sm}>
                    <div><h3 className={style.details_title}>Points</h3></div>
                    <div className={style.details_options}>
                        {options.map((item,i)=>(
                            <div>
                                <div className={style.details_option} key={i}>
                                    <span>Circle{item.id}</span>
                                    <button className={style.details_btn} key={i} onClick={()=>{setOption([...item.options]); setSubtext(item.subtext)}}>{item.name}</button>
                                    {console.log(isOption)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className={style.details_subtext}>Circles - increase the chance of drophunting
                        More "Circles" you will do, more probability in getting airdrop.</p>
                    </div>
                </div>
                <div className={style.details}>
                    <div><h3 className={style.details_title}>Gentrated EVM wallets</h3></div>
                    <div>
                        <div>{isOption.map((item,i)=>(
                            <div className={style.details_unwrapped}>
                                <img style={{maxWidth:"20px"}} src={item.img} alt="" />
                                {item.text}
                            </div>
                        ))}</div>
                        <p className={style.details_subtext}>{isSubtext}</p>
                    </div>
                </div>
            </div>
            <div className={style.btn_wrapper}>
                <button onClick={()=>{setBuyModal(true);onClose()}} className={style.popup_btn}>Buy Tariff</button>
            </div>
        </div>
    </div>
  )
}
