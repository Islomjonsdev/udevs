import Image from 'next/image';
import React from 'react';
import erpimg from "../../assets/images/erpImg.png"
import style from "./ErpSystem.module.scss"

const ErpSystem = () => {
  return (
    <section className={style.erp_system}>
      <div className={style.container}>
          <div className={style.erp_system_blog}>
              <h1>ERP cистемы</h1>
              <div className={style.erp_system_wrapper}>
                  <div className={style.erp_system_left}>
                      <Image src={erpimg} alt="erpImg"/>
                  </div>
                  <div className={style.erp_system_right}>
                      <p>IT Системы любого уровня сложности в удобные для вас сроки.</p>
                      <div className={style.erp_system_list}></div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default ErpSystem