"use client"
import React from "react";
import uiUxIcon1 from "../../assets/svg/uiux1.svg";
import uiUxIcon2 from "../../assets/svg/uiux2.svg";
import uiUxIcon3 from "../../assets/svg/uiux3.svg";
import uiUxIcon4 from "../../assets/svg/uiux4.svg";
import uiUxIcon5 from "../../assets/svg/uiux5.svg";
import uiUxIcon6 from "../../assets/svg/uiux6.svg";
import uiIxImg from "../../assets/images/uiuximg.png"
import UiUxItem from "./UiUxItem/UiUxItem";
import style from "./UiUx.module.scss";
import Image from "next/image";

const UiUx = () => {
  const uiUxData = [
    {
      uiUxIcon: uiUxIcon1,
      uiUxText: "UX",
    },
    {
      uiUxIcon: uiUxIcon2,
      uiUxText: "UI",
    },
    {
      uiUxIcon: uiUxIcon3,
      uiUxText: "Prototyping",
    },
    {
      uiUxIcon: uiUxIcon4,
      uiUxText: "Mobile Design",
    },
    {
      uiUxIcon: uiUxIcon5,
      uiUxText: "Web Design",
    },
    {
      uiUxIcon: uiUxIcon6,
      uiUxText: "Atomic Design",
    },
  ];
  return (
    <section className={style.ui_ux}>
      <div className={style.container}>
        <div className={style.ui_ux_blog}>
          <h1>UI / UX Дизайн</h1>
          <div className={style.ui_ux_wrapper}>
            <div className={style.ui_ux_left}>
              <p className={style.ui_ux_left_text}>
                Наша компания придерживается подхода к дизайну, ориентированного
                на человека..
              </p>
              <div className={style.ui_ux_left_list}>
                {uiUxData?.map((item, index) => {
                  const { uiUxIcon, uiUxText } = item;
                  return (
                    <UiUxItem
                      key={index}
                      uiUxIcon={uiUxIcon}
                      uiUxText={uiUxText}
                    />
                  );
                })}
              </div>
            </div>

            <div className={style.ui_ux_right}>
                <Image src={uiIxImg} alt="uiIxImg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUx;
