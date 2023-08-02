import React from 'react'
import data from '../Data.json'
import style from './componentsStyles/main.module.css'

export default function Main() {
  return (
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
                    <button className={style.detail_button}>Read More</button>
                    <div className={style.profit}>
                        <p className={style.profit_title}>On Artificial AI:</p>
                        <div className={style.profit_info}>
                            <div className={style.profit_col}>
                                <p className={style.profit_coltitle}>expected airdrop</p>
                                <p>{item.expected}</p>    
                            </div>
                            <div className={style.profit_col}>
                                <p className={style.profit_coltitle}>probability</p>
                                <p>{item.probability}</p>                            
                            </div>
                        </div>
                    </div>
                    <div className={style.check_header}>
                        <p>Tariff</p>
                        <p>Cost, $</p>
                        <p></p>
                    </div>
                    {item.options.map((option,i)=>(
                    <div key={i} className={style.airdrop_check}>
                        <div className={style.check_item}>
                            <div>
                                <input type="checkbox" />
                                <span>{option.accounts} accounts</span>
                            </div>
                            <div>{option.price}</div>
                            {item.detail?
                                <button className={style.check_detail_button}>Detail</button>
                            :
                                <div className={style.check_detail_button}></div>
                            }
                                
                        </div>             
                    </div>
                ))}
                    <div className={style.button_wrapper}>
                        <button className={style.buy_btn}>Buy</button>
                    </div>
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
  )
}
