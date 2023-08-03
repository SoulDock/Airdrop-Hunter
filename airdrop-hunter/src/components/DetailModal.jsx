import React from 'react'
import style from './componentsStyles/popUp.module.css'
export default function DetailModal({open, onClose, infoText}) {
    if(!open) return null
  return (
    <div onClick={onClose} className={style.overlay}>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.modal_container_details}>
            <div className={style.top_layer}>
                <h3>Detailed information</h3>
                <span onClick={onClose}>X</span>
            </div>
            <div className={style.details_wrapper}>
                <div className={style.details}>
                    <div><h3 className={style.details_title}>Points</h3></div>
                    <div className={style.details_options}>
                        <div className={style.details_option}><span>Circle1</span><a href="">Generated EVM wallets</a></div>
                        <div className={style.details_option}><span>Circle2</span><a href="">Initial actions</a></div>
                        <div className={style.details_option}><span>Circle3</span><a href="">Increase in positions</a></div>
                        <div className={style.details_option}><span>Circle4</span><a href="">Maximum power</a></div>
                    </div>
                    <div>
                        <p className={style.details_subtext}>Circles - increase the chance of drophunting
                        More "Circles" you will do, more probability in getting airdrop.</p>
                    </div>
                </div>
                <div className={style.details}>
                    <div><h3 className={style.details_title}>Gentrated EVM wallets</h3></div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
