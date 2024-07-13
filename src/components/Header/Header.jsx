import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/svg/logo.svg";
import downIcon from "../../assets/svg/down.svg";
import ContactUs from "../ContactUs/ContactUs";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header_container}>
          <Link className={style.header_link} href={"/"}>
            <Image src={logo} />
          </Link>
          <div className={style.header_list_wrapper}>
            <nav>
              <ul>
                <li>
                  <Link href={"/"}>Услуги</Link>
                </li>
                <li>
                  <Link href={"/"}>Команда</Link>
                </li>
                <li>
                  <Link href={"/"}>
                    Напрaвление
                    <Image src={downIcon} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>Инструменты</Link>
                </li>
                <li>
                  <Link href={"/"}>Клиенты</Link>
                </li>
                <li>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <p>Язык</p>
                    <Image src={downIcon} />
                  </div>
                </li>
              </ul>
            </nav>
            <ContactUs className={style.contact_us_link}/>
          </div>
            <RxHamburgerMenu className={style.header_hamburger}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
