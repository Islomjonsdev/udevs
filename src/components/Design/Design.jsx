"use client";

import React from "react";
import cardImg1 from "../../assets/svg/uiux1.svg";
import cardImg2 from "../../assets/svg/uiux2.svg";
import cardImg3 from "../../assets/svg/uiux3.svg";
import cardImg4 from "../../assets/svg/uiux4.svg";
import cardImg5 from "../../assets/svg/uiux5.svg";
import cardImg6 from "../../assets/svg/uiux6.svg";
import cardImgRight from "../../assets/images/uiuximg.png";
import figmaIcon from "../../assets/svg/figma.svg";
import secIcon from "../../assets/svg/sec.svg";
import lottieIcon from "../../assets/svg/lottie.svg";
import lllusIcon from "../../assets/svg/lllus.svg";
import Card from "./Card/Card";

import style from "./Design.module.scss";
import Image from "next/image";

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

  const technologyData = [
    {
      techImg: figmaIcon,
      techText: "Figma",
    },
    {
      techImg: secIcon,
      techText: "Sketch",
    },
    {
      techImg: lottieIcon,
      techText: "Lottie",
    },
    {
      techImg: lllusIcon,
      techText: "Illustrator",
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
              <div className={style.card_bottom}>
                <h3>Технологии</h3>
                <div className={style.card_bottom_list}>
                  {technologyData?.map((card, index) => {
                    const { techImg, techText } = card;
                    return (
                      <div className={style.card_bottom_item} key={index}>
                        <Image className={style.card_bottom_img} src={techImg} alt="techImg" />
                        <p className={style.card_bottom_text}>{techText}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={style.card_right}>
              <Image src={cardImgRight} alt="cardImgRight" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
