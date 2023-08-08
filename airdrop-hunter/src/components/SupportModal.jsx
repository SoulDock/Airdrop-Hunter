import React from 'react'
import style from './componentsStyles/popUp.module.css'
export default function SupportModal({open, onClose}) {
    if(!open) return null
  return (
    <div onClick={onClose} className={style.overlay}>
        <div onClick={(e)=>{e.stopPropagation()}} className={style.support_modal_container}>
            <div className={style.top_layer}>
                <h3>Send message to support</h3>
                <div onClick={onClose} className={style.clost_btn_outlayer}>
                    <div  className={style.close_btn}>
                        <div className={style.close_btn_item1}></div>
                        <div className={style.close_btn_item2}></div>
                    </div>
                </div>
            </div>
            <div className={style.support_content}>
                <form action="">
                    <div className={style.support_input_wrapper}>
                        <label htmlFor="1">Address:</label>
                        <input id='1' type="text" />
                    </div>
                    <div className={style.support_input_wrapper}>
                        <label htmlFor="2">Insert you contacts (telegram login or email)</label>
                        <input id='2' type="text" />
                    </div>
                    <div className={style.support_input_wrapper}>
                        <label htmlFor="3">Message:</label>
                        <textarea id='3' type="textarea" />
                    </div>
                    <button className={style.support_send_btn}>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
