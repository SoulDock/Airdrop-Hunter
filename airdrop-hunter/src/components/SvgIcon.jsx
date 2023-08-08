import React from 'react'
import style from './componentsStyles/header.module.css'
export default function SvgIcon({xmlns,path}) {
  return (
    <svg className={style.svg} xmlns={xmlns}>
        <path d={path}/>
    </svg>
  )
}
