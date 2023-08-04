import React from 'react'
import style from './componentsStyles/popUp.module.css'
import bsc from '../localimg/bsc.svg'
import poligon from '../localimg/poligon.svg'
import eth from '../localimg/ethereum.svg'
export default function BuyTariffModal({Close,isOpen}) {
    if(!isOpen) return null
  return (
    <div onClick={Close} className={style.overlay}>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.container_buy_tarif}>
            <div className={style.top_layer}>
                <p className={style.buytarif_description}>Payment from you access balance</p>
                <span onClick={Close}>X</span>
            </div>
            <p className={style.buytarif_description}>You pay $150 to get tarif '5 accounts' in possible AirDrop LayerZero</p>
            <div className={style.grp}>
                <div className={style.grp_row}>
                    <div className={style.row_name}>
                        <p></p>
                    </div>
                    <span className={style.row_mid}>Balance</span>
                    <div className={style.row_btn_dsbld}></div>
                </div>
                <div className={style.grp_row}>
                    <div className={style.row_name}>
                        <img src={poligon} alt="" />
                        <p>Polygon</p>
                    </div>
                    <span className={style.row_mid}>-</span>
                    <button className={style.row_btn}>Connect walet</button>
                </div>
                <div className={style.grp_row}>
                    <div className={style.row_name}>
                        <img src={bsc} alt="" />
                        <p>Polygon</p>
                    </div>
                    <span className={style.row_mid}>-</span>
                    <button className={style.row_btn}>Connect walet</button>
                </div>
                <div className={style.grp_row}>
                    <div className={style.row_name}>
                        <img src={eth} alt="" />
                        <p>Polygon</p>
                    </div>
                    <span className={style.row_mid}>-</span>
                    <button className={style.row_btn}>Connect walet</button>
                </div>
            </div>
            <div className={style.check_area}>
                <input type="checkbox" />
                <p>i agree with the</p>
                <a href="">agreement</a>
            </div>
        </div>
    </div>
  )
}
