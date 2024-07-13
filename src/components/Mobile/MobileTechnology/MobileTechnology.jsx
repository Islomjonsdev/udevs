import React from "react";
import swiftIcon from "../../../assets/svg/swift.svg";
import kotlinIcon from "../../../assets/svg/kotlin.svg";
import flutterIcon from "../../../assets/svg/flutter.svg";
import style from "./MobileTechnology.module.scss";
import Image from "next/image";

const MobileTechnology = () => {
  const mobileTechnologyData = [
    {
      image: swiftIcon,
      text: "Swift",
    },
    {
      image: kotlinIcon,
      text: "Kotlin",
    },
    {
      image: flutterIcon,
      text: "Flutter",
    },
  ];
  return (
    <div className={style.wrapper}>
      <span>Технологии</span>
      <ul>
        {mobileTechnologyData?.map((card, index) => {
          const { image, text } = card;
          return (
            <li key={index}>
              <Image src={image} alt="image" />
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileTechnology;
