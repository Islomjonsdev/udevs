import React from "react";
import iosIcon from "../../assets/svg/ios.svg";
import androidIcon from "../../assets/svg/android.svg";
import phoneIcon from "../../assets/svg/phone.svg";
import style from "./Mobile.module.scss";
import MobileCard from "./MobileCard/MobileCard";
import phoneImg from "../../assets/images/mobile.png"
import MobileTechnology from "./MobileTechnology/MobileTechnology";
import Image from "next/image";

const Mobile = () => {
  const mobileData = [
    {
      icon: iosIcon,
      text: "iOS",
    },
    {
      icon: androidIcon,
      text: "Android",
    },
    {
      icon: phoneIcon,
      text: "Crossplatform",
    },
  ];
  return (
    <section className={style.mobile}>
      <div className={style.container}>
        <div className={style.mobile_blog}>
          <h1>Мобильная разработка</h1>
          <div className={style.mobile_wrapper}>
            <div className={style.mobile_left}>
              <p className={style.mobile_text}>
                В сотрудничестве со стартапами мы научились создавать творческий
                и функциональный пользовательский интерфейс для мобильных
                приложений.
              </p>
              <div className={style.mobile_list}>
                {mobileData?.map((item, index) => {
                  const { icon, text } = item;
                  return <MobileCard key={index} icon={icon} text={text} />;
                })}
              </div>
              <MobileTechnology />
            </div>
            <div className={style.mobile_right}>
              <Image src={phoneImg} alt="phoneImg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
