import React from 'react'
import style from './componentsStyles/airdropElement.module.css'
import icon from '../img/starknet-logo.png'
export default function AirdropElement() {
  return (
    <div className={style.airdrop_container}>
        <div className={style.airdrop_wrapper}>
            <div className={style.airdrop_title}>
                <img className={style.airdrop_icon} src={icon} alt="" />
                <h2 className={style.airdrop_title_text}>StarkNet</h2>
            </div>
            <div>
                <p className={style.airdrop_subtext}>LayerZero is an Omnichain communication protocol designed to simplify message passing across chains.</p>
            </div>
            <button className={style.detail_button}>Read More</button>
            <div className={style.profit}>
                <p className={style.profit_title}>On Artificial AI:</p>
                <div className={style.profit_info}>
                    <div className={style.profit_col}>
                        <p className={style.profit_coltitle}>expected airdrop</p>
                        <p>$500 - $5000</p>    
                    </div>
                    <div className={style.profit_col}>
                        <p className={style.profit_coltitle}>probability</p>
                        <p>78 %</p>                            
                    </div>
                </div>
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
                        <span>5 accounts</span>
                    </div>
                    <dvi>150</dvi>
                    <button className={style.check_detail_button}>Detail</button>
                </div>
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
                        <span>5 accounts</span>
                    </div>
                    <dvi>150</dvi>
                    <button className={style.check_detail_button}>Detail</button>
                </div>
                <div className={style.check_item}>
                    <div>
                        <input type="checkbox" />
                        <span>5 accounts</span>
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
        <div className={style.airdrop_label}>
            <span>Live</span>
        </div>
    </div>
  )
}
