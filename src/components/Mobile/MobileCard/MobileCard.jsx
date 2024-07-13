import Image from 'next/image'
import React from 'react'
import style from "./MobileCard.module.scss"

const MobileCard = ({icon, text}) => {
  return (
    <div className={style.mobile_item}>
        <Image src={icon} alt="icon"/>
        <p>{text}</p>
    </div>
  )
}

export default MobileCard