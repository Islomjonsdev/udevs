import Image from "next/image";
import React from "react";
import erpimg from "../../assets/images/erpImg.png";
import imageErp1 from "../../assets/svg/image1.svg";
import imageErp2 from "../../assets/svg/image2.svg";
import imageErp3 from "../../assets/svg/image3.svg";
import imageErp4 from "../../assets/svg/image4.svg";
import imageErp5 from "../../assets/svg/image5.svg";
import imageErp6 from "../../assets/svg/image6.svg";
import ErpCards from "./ErpCards/ErpCards";

import style from "./ErpSystem.module.scss";

const ErpSystem = () => {
  const erpSystemData = [
    {
      erpImg: imageErp1,
      erpText: "CRM",
    },
    {
      erpImg: imageErp2,
      erpText: "eLearning",
    },
    {
      erpImg: imageErp3,
      erpText: "E-Commerce",
    },
    {
      erpImg: imageErp4,
      erpText: "POS",
    },
    {
      erpImg: imageErp5,
      erpText: "Sms / Email",
    },
    {
      erpImg: imageErp6,
      erpText: "Warehouse",
    },
  ];
  return (
    <section className={style.erp_system}>
      <div className={style.container}>
        <div className={style.erp_system_blog}>
          <h1>ERP cистемы</h1>
          <div className={style.erp_system_wrapper}>
            <div className={style.erp_system_left}>
              <Image src={erpimg} alt="erpImg" />
            </div>
            <div className={style.erp_system_right}>
              <p className={style.erp_system_right_text}>IT Системы любого уровня сложности в удобные для вас сроки.</p>
              <div className={style.erp_system_list}>
                {erpSystemData?.map((item, index) => {
                  const { erpImg, erpText } = item;
                  return (
                    <ErpCards key={index} erpImg={erpImg} erpText={erpText} />
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

export default ErpSystem;
