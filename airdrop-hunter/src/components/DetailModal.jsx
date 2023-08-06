import React, { useState,useEffect } from 'react'
import style from './componentsStyles/popUp.module.css'
import options from '../Options.json'
import BuyTariffModal from './BuyTariffModal';
export default function DetailModal({open, onClose, price, wallets, name}) {
    const [isBuyModal,setBuyModal] = useState(false)
    const [isOption, setOption] = useState([
        {position: '1', text: 'Generation of wallets according to the tariff'}]);
    const [isSubtext, setSubtext] = useState("Automatic generation occurs after payment of the tariff")
    if(isBuyModal){
        return <BuyTariffModal tarifPrice={price} accounts={wallets} isOpen={isBuyModal} Close={()=>setBuyModal(false)}></BuyTariffModal>
    }
    else if(!open)
    {return null} 
  return (
    <div onClick={onClose} className={style.overlay}>
        <BuyTariffModal wallets={wallets} tarifPrice={price} isOpen={isBuyModal} Close={()=>setBuyModal(false)}></BuyTariffModal>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.modal_container_details}>
            <div className={style.top_layer}>
                <div className={style.details_title_wrapper}>
                    <h3>Detailed information</h3>
                    <div>
                        <span>Airdrop name:</span>
                        <span className={style.airdrop_name}>{name}</span>
                    </div>
                    <div>
                        <span>Tariff:</span>
                        <span className={style.airdrop_name}>{wallets}</span>
                    </div>
                    <div>
                        <span>Number of wallets:</span>
                        <span className={style.airdrop_name}>{wallets}</span>
                    </div>
                </div>
                <div onClick={onClose} className={style.clost_btn_outlayer}>
                    <div  className={style.close_btn}>
                        <div className={style.close_btn_item1}></div>
                        <div className={style.close_btn_item2}></div>
                    </div>
                </div>
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
                                <span>{item.position}</span>
                                <img style={{maxWidth:"20px"}} src={item.img} alt="" />
                                {item.text}
                            </div>
                        ))}</div>
                        <p className={style.details_subtext_center}>{isSubtext}</p>
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
