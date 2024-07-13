import Image from 'next/image';
import React from 'react';
import style from "./ErpCards.module.scss"

const ErpCards = ({erpImg, erpText}) => {
  return (
    <div className={style.erp_system_item}>
        <Image src={erpImg} alt="erpImg"/>
        <p>{erpText}</p>
    </div>
  )
}

export default ErpCards