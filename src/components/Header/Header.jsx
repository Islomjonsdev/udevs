"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/svg/logo.svg";
import downIcon from "../../assets/svg/down.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.header_container}>
            <Link className={style.header_link} href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
            <div className={style.header_list_wrapper}>
              <nav>
                <ul>
                  <li>
                    <Link href={"/#ourser"}>Услуги</Link>
                  </li>
                  <li>
                    <Link href={"/#team"}>Команда</Link>
                  </li>
                  <li>
                    <Link href={"/#mobile"}>
                      Напрaвление
                      <Image src={downIcon} alt="downIcon" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>Инструменты</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Клиенты</Link>
                  </li>
                  <li>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>Язык</p>
                      <Image src={downIcon} alt="downIcon" />
                    </div>
                  </li>
                </ul>
              </nav>
              <Link className={style.contact_us_link} href={"/"}>
                Связаться
              </Link>
            </div>
            <RxHamburgerMenu className={style.header_hamburger} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
