import React, { useState } from 'react'
import data from '../Data.json'
import style from './componentsStyles/main.module.css'
import Header from './Header'
import InfoModal from './InfoModal';
import DetailModal from './DetailModal';
import BuyTariffModal from './BuyTariffModal';

export default function Main() {

    const [isInfoModal, setInfoModal] = useState(false)
    const [isInfo, setInfo] = useState("")
    const [isDetailModal, setDetailModal] = useState(false)
    const [isBuyModal,setBuyModal] = useState(false)
    const [isSelectedAmount, setSelectedAmount] = useState("")
    const [isSelectedAccounts, setSelectedAccounts] = useState("")
    const [isAmountForDetails, setAmountForDetails] = useState("")
    const [isNumberOfWalets, setNumberOfWalets] = useState("")
    const [isTarifName, setTarifName] = useState("")
    const [isCheckBoxId, setCheckBoxId] = useState(0)
    const [isDisabled , setDisabled] = useState(true)

  return (
    <>

    <InfoModal open={isInfoModal} onClose={()=>setInfoModal(false)} infoText={isInfo}/>
    <DetailModal name={isTarifName} wallets={isNumberOfWalets} price={isAmountForDetails} open={isDetailModal} onClose={()=>setDetailModal(false)} infoText={isInfo}/>
    <BuyTariffModal accounts={isSelectedAccounts} isOpen={isBuyModal} name={isTarifName} Close={()=>setBuyModal(false)} tarifPrice={isSelectedAmount} ></BuyTariffModal>

    <Header/>

    <div className={style.container}>
        {
            data.map((item, i)=>(
                <div className={style.airdrop_container} key={i}>
                <div className={style.airdrop_wrapper}>
                    <div className={style.airdrop_title}>
                        <img className={style.airdrop_icon} src={item.img} alt="" />
                        <h2 className={style.airdrop_title_text}>{item.name}</h2>
                    </div>                   
                    <div>
                        <p className={style.airdrop_subtext}>{item.text}</p>
                    </div>
                    <button onClick={()=>{{setInfoModal(true)};setInfo(item.info)}} className={style.detail_button}>Read More</button>
                    <div className={style.profit}>
                        <p className={style.profit_title}>On Artificial AI:</p>
                        <div className={style.profit_info}>
                            <div className={style.profit_col}>
                                <p className={style.profit_coltitle}>expected airdrop</p>
                                <p className={style.profit_value}>{item.expected}</p>    
                            </div>
                            <div className={style.profit_col}>
                                <p className={style.profit_coltitle}>probability</p>
                                <p className={style.profit_value}>{item.probability}</p>                            
                            </div>
                        </div>
                    </div>
                    <div className={style.check_header}>
                        <p style={{width:"40%"}}>Tariff</p>
                        <p>Cost, $</p>
                        <p></p>
                    </div>
                    {item.options.map((option,i)=>(
                    <div key={i} className={style.airdrop_check}>
                        <div className={style.check_item}>
                            <div className={style.check_options}>
                                <input key={i} checked={option.optionId === isCheckBoxId} onChange={()=>setCheckBoxId(option.optionId)} type="checkbox" onClick={()=> {setSelectedAmount(option.price);setSelectedAccounts(option.accounts);setTarifName(item.name);setDisabled(false)}} />
                                <span>{option.accounts} accounts</span>
                            </div>
                            <div className={style.check_price}>{option.price}</div>
                            {item.detail?
                                <button onClick={()=>{{setDetailModal(true);setNumberOfWalets(option.accounts);setTarifName(item.name);setAmountForDetails(option.price)}}} className={style.check_detail_button}>Detail</button>
                            :
                                <div className={style.check_detail_button}></div>
                            }
                        </div>             
                    </div>
                ))}
                {item.button == "Submit your Script" ? 
                    <div className={style.button_wrapper}>
                        <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScNQg3Z4bxtx1a1XQbv4ObkXVK2uDPN6Kr59o6sitbB2qXgcQ/viewform' className={style.submit_btn}>{item.button}</a>
                    </div> 
                :  <div></div>}
                {item.button == "BUY" ? 
                    <div className={style.button_wrapper}>
                        <button disabled={isDisabled} onClick={()=>{setBuyModal(true)}} className={style.buy_btn}>{item.button}</button>
                    </div> 
                :  <div></div>}
                {item.button == "Coming soon" ?
                    <div className={style.button_wrapper}>
                        <button className={style.buy_btn}>{item.button}</button>
                    </div> 
                :  <div></div>}
                    <p className={style.bottom_text}>{item.subtext}</p>
                </div>
                {item.labelStatus ? 
                    <div style={{backgroundColor:"#23ACDE"}} className={style.airdrop_label}>
                        <span>{item.label}</span>
                    </div>
                :
                    <div style={{backgroundColor:"#BABDCE"}} className={style.airdrop_label}>
                        <span>{item.label}</span>
                    </div>
                
                }
            </div>
            ))
        }
    </div>
    </>
  )
}
