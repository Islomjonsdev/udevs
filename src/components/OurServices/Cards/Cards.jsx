import Image from "next/image";
import React from "react";
import style from "./Cards.module.scss";

const Cards = ({ cardsImg, cardsText }) => {
  return (
    <div className={style.our_services_item}>
      <Image src={cardsImg} alt="cardsImg" />
      <h3>{cardsText}</h3>
    </div>
  );
};

export default Cards;
