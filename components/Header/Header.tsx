"use client";
import Image from "next/image";
import style from "./Header.module.css";
import { headerData } from "./HeaderData";
import clsx from "clsx";
import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);

  return (
    <div className={style.header}>
      <div className={style.navbar}>
        <div>
          <Image src="/svg/logo.svg" width={113} height={37} alt="logo" />
        </div>

        <ul className={clsx(style.list, isActive && style.active)}>
          {headerData.map((item, index) => (
            <li key={index} className={style.link}>
              {item.link}
            </li>
          ))}
        </ul>

        <div className={style.box}>
          <button
            type="button"
            aria-label="menu"
            onClick={toggleMenu}
            className={clsx(style.hamburger, isActive && style.isActive)}
          >
            <span className={style.hamburgerBox}>
              <span className={style.hamburgerInner}></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
