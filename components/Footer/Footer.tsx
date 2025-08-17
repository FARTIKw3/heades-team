import Image from "next/image";
import style from "./Footer.module.css";
import { footerLink } from "./FooterLink";
import Link from "next/link";
import { footerService } from "./FooterService";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__top}>
          <div className={style.footer__about}>
            <div className={style.footer__logo}>
              <Image src="/svg/logo.svg" width={113} height={37} alt="logo" />
            </div>
            <p className={style.footer__text}>
              Мы — команда разработчиков и дизайнеров, создающая продуманные,
              современные и масштабируемые цифровые решения. Работаем с любовью
              к деталям, чистому коду и дизайну, который работает.
            </p>
            <div className={style.footer__socials}>
              <Link href="/" className={style.footer__social}>
                <Image
                  src="/svg/telegram.svg"
                  width={24}
                  height={24}
                  alt="telegram"
                />
              </Link>
              <Link href="/" className={style.footer__social}>
                <Image
                  src="/svg/email.svg"
                  width={24}
                  height={24}
                  alt="email"
                />
              </Link>
            </div>
          </div>

          <div className={style.footer__info}>
            <div className={style.footer__links}>
              <span className={style.footer__title}>Быстрые ссылки</span>
              <ul className={style.footer__list}>
                {footerLink.map((item, index) => (
                  <li key={index} className={style.footer__item}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.footer__services}>
              <span className={style.footer__title}>Сервисы</span>
              <ul className={style.footer__list}>
                {footerService.map((item, index) => (
                  <li key={index} className={style.footer__item}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={style.footer__border}></div>
        <div className={style.footer__bottom}>
          <div className={style.footer__copyright}>
            © 2025 Heades-team. Все права защищены.
          </div>
          <div className={style.footer__made}>
            Сделано{" "}
            <span className={style.footer__heart}>
              {" "}
              <Image src="/svg/heart.svg" width={24} height={24} alt="email" />
            </span>{" "}
            командным духом
          </div>
        </div>
      </div>
    </footer>
  );
};
