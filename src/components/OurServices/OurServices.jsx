import React from "react";
import img1 from "../../assets/svg/cardImg1.svg";
import img2 from "../../assets/svg/cardImg2.svg";
import img3 from "../../assets/svg/cardImg3.svg";
import img4 from "../../assets/svg/cardImg4.svg";
import img5 from "../../assets/svg/cardImg5.svg";
import img6 from "../../assets/svg/cardImg6.svg";
import Cards from "./Cards/Cards";
import style from "./OurServices.module.scss";

const OurServices = () => {
  const cardsData = [
    {
      cardsImg: img1,
      cardsText: "Выделенная команда",
    },
    {
      cardsImg: img2,
      cardsText: "Разработка мобильных приложений",
    },
    {
      cardsImg: img3,
      cardsText: "Разработка и внедрение ERP систем",
    },
    {
      cardsImg: img4,
      cardsText: "UI / UX дизайн",
    },
    {
      cardsImg: img5,
      cardsText: "Оптимизация инфраструктуры",
    },
    {
      cardsImg: img6,
      cardsText: "IT консалтинг",
    },
  ];
  return (
    <section className={style.our_services}>
      <div className={style.container}>
        <div className={style.our_services_wrapper}>
          <h1>Наши услуги</h1>
          <div className={style.our_services_list}>
            {cardsData?.map((itemCards, index) => {
              const { cardsImg, cardsText } = itemCards;
              return (
                <Cards key={index} cardsImg={cardsImg} cardsText={cardsText} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
