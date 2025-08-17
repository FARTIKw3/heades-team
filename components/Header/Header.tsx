import Image from "next/image";
import style from "./Header.module.css";
import stylse from "./Header.module.css";
import { headerData } from "./HeaderData";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.navbar}>
        <div>
          <Image src="/svg/logo.svg" width={113} height={37} alt="logo" />
        </div>
        <ul className={style.list}>
          {headerData.map((item, index) => (
            <li key={index} className={style.link}>
              {item.link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
