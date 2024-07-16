import Image from 'next/image';
import React from 'react';
import style from "./Card.module.scss"

const Card = ({cardImg, cardText}) => {
  return (
    <div className={style.card}>
        <Image src={cardImg} alt='cardImg'/>
        <p>{cardText}</p>
    </div>
  )
}

export default Card