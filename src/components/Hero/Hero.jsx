import Image from "next/image";
import React from "react";
import heroLOgo from "../../assets/svg/logo.svg";
import heroImg from "../../assets/svg/hero.svg";
import style from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.hero__wrapper}>
          <div className={style.hero_left}>
            <Image src={heroLOgo} alt="heroLOgo"/>
            <p>IT-Аутсорсинг Компания</p>
            <span>Разработка мобильных приложений</span>
            <Link href={"/"}>Связаться</Link>
          </div>
          <div className={style.hero_right}>
            <Image src={heroImg} alt="heroImg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
