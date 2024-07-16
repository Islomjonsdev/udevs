"use client";

import React from "react";
import cardImg1 from "../../assets/svg/uiux1.svg";
import cardImg2 from "../../assets/svg/uiux2.svg";
import cardImg3 from "../../assets/svg/uiux3.svg";
import cardImg4 from "../../assets/svg/uiux4.svg";
import cardImg5 from "../../assets/svg/uiux5.svg";
import cardImg6 from "../../assets/svg/uiux6.svg";
import Card from "./Card/Card";

import style from "./Design.module.scss";

const Design = () => {
  const cardData = [
    {
      cardImg: cardImg1,
      cardText: "UX",
    },
    {
      cardImg: cardImg2,
      cardText: "UI",
    },
    {
      cardImg: cardImg3,
      cardText: "Prototyping",
    },
    {
      cardImg: cardImg4,
      cardText: "Mobile Design",
    },
    {
      cardImg: cardImg5,
      cardText: "Web Design",
    },
    {
      cardImg: cardImg6,
      cardText: "Atomic Design",
    },
  ];
  return (
    <section className={style.design}>
      <div className={style.container}>
        <div className={style.design_blog}>
          <h1>UI / UX Дизайн</h1>
          <div className={style.card_wrapper}>
            <div className={style.card_left}>
              <p className={style.card_lef_text}>
                Наша компания придерживается подхода к дизайну, ориентированного
                на человека..
              </p>
              <div className={style.card_list}>
                {cardData?.map((item, index) => {
                  const { cardImg, cardText } = item;
                  return (
                    <Card key={index} cardImg={cardImg} cardText={cardText} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
