import Image from 'next/image';
import React from 'react'
import heroLOgo from "../../assets/svg/logo.svg";
import heroImg from "../../assets/svg/hero.svg"
import style from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={style.hero}>
        <div className={style.container}>
            <div className={style.hero__wrapper}>
                <div className={style.hero_left}>
                    <Image src={heroLOgo}/>
                    <p>IT-Аутсорсинг Компания <span>Разработка мобильных приложений|</span></p>

                </div>
                <div className={style.hero_right}>
                    <Image src={heroImg}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero