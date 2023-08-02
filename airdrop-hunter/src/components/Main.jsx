import React from 'react'
import data from '../Data.json'
import style from './componentsStyles/main.module.css'

export default function Main() {
  return (
    <div className={style.container}>
        {
            data.map((data, i)=>(
                <div className={style.airdrop_container} key={i}>
                <div className={style.airdrop_wrapper}>
                    <div className={style.airdrop_title}>
                        <img className={style.airdrop_icon} src={data.img} alt="" />
                        <h2 className={style.airdrop_title_text}>{data.name}</h2>
                    </div>
                    <div>
                        <p className={style.airdrop_subtext}>{data.text}</p>
                    </div>
                    <button className={style.detail_button}>Read More</button>
                    <div className={style.profit}>
                        <p className={style.profit_title}>On Artificial AI:</p>
                        <div className={style.profit_info}>
                            <div className={style.profit_col}>
                                <p className={style.profit_coltitle}>expected airdrop</p>
                                <p>{data.expected}</p>    
                            </div>
                            <div className={style.profit_col}>
                                <p className={style.profit_coltitle}>probability</p>
                                <p>{data.probability}</p>                            
                            </div>
                        </div>
                    </div>
                    <div className={style.check_header}>
                        <p>Tariff</p>
                        <p>Cost, $</p>
                        <p></p>
                    </div>
                    <div className={style.airdrop_check}>
                        {/* CHECK ITEMS */}
                        <div className={style.check_item}>
                            <div>
                                <input type="checkbox" />
                                <span>5 accounts</span>
                            </div>
                            <dvi>150</dvi>
                            <button className={style.check_detail_button}>Detail</button>
                        </div>
                        <div className={style.check_item}>
                            <div>
                                <input type="checkbox" />
                                <span>10 accounts</span>
                            </div>
                            <dvi>150</dvi>
                            <button className={style.check_detail_button}>Detail</button>
                        </div>
                        <div className={style.check_item}>
                            <div>
                                <input type="checkbox" />
                                <span>20 accounts</span>
                            </div>
                            <dvi>150</dvi>
                            <button className={style.check_detail_button}>Detail</button>
                        </div>
                        <div className={style.check_item}>
                            <div>
                                <input type="checkbox" />
                                <span>25 accounts</span>
                            </div>
                            <dvi>150</dvi>
                            <button className={style.check_detail_button}>Detail</button>
                        </div>
                        <div className={style.check_item}>
                            <div>
                                <input type="checkbox" />
                                <span>30 accounts</span>
                            </div>
                            <dvi>150</dvi>
                            <button className={style.check_detail_button}>Detail</button>
                        </div>
                    </div>
                    <div className={style.button_wrapper}>
                        <button className={style.buy_btn}>Buy</button>
                    </div>
                    <p className={style.bottom_text}>Choose a suitable tarif and click the button</p>
                </div>
                {data.labelStatus ? 
                    <div style={{backgroundColor:"#23ACDE"}} className={style.airdrop_label}>
                        <span>{data.label}</span>
                    </div>
                :
                    <div style={{backgroundColor:"#BABDCE"}} className={style.airdrop_label}>
                        <span>{data.label}</span>
                    </div>
                
                }
            </div>
            ))
        }
    </div>
  )
}
