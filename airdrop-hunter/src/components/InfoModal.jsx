import React from 'react'
import style from './componentsStyles/popUp.module.css'


export default function InfoModal({open, onClose, infoText}) {
    if(!open) return null
  return (
    <div onClick={onClose} className={style.overlay}>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.modal_container}>
            <div className={style.top_layer}>
                <h3>Info</h3>
                <div  className={style.close_btn} onClick={onClose}>
                    <div className={style.close_btn_item1}></div>
                    <div className={style.close_btn_item2}></div>
                </div>
            </div>
            <div className={style.info}>
                <p>{infoText}</p>
            </div>
        </div>
    </div>
  )
}
