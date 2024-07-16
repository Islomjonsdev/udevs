import Image from "next/image";
import React from "react";
import style from "./UiUxItem.module.scss";

const UiUxItem = ({ uiUxIcon, uiUxText }) => {
  return (
    <div className={style.ui_ux_item}>
      <Image src={uiUxIcon} alt="uiUxIcon" />
      <p>{uiUxText}</p>
    </div>
  );
};

export default UiUxItem;
