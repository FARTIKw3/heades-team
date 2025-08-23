import Link from "next/link";
import style from "./Contact.module.css";
import Image from "next/image";

export const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contact__intro}>
        <h1 className={style.contact__title}>Свяжитесь с нами</h1>
        <p className={style.contact__description}>
          Мы всегда открыты к новым возможностям и интересным проектам. Давайте
          обсудим, как команда Heades-team может помочь вам.
        </p>
      </div>

      <div className={style.contact__content}>
        <div className={style.contact__info}>
          <h2 className={style.contact__subtitle}>Давайте подключимся</h2>
          <p className={style.contact__text}>
            У вас есть идея, проект или вы ищете надежную команду для
            сотрудничества? Напишите нам — мы ответим в ближайшее время
          </p>

          <div className={style.contact__socials}>
            <div className={style.contact__email}>
              <div className={style.contact__border}>
                <div className={style.contact__gmail}>
                  <Image
                    src="/svg/email.svg"
                    width={24}
                    height={24}
                    alt="email"
                  />
                  <span>Email</span>
                </div>
                <div className={style.contact__span}>
                  <span>Alex@gmail.com</span>
                </div>
                <div className={style.contact__span}>
                  {" "}
                  <span>Ответим в течение 24 часов</span>
                </div>
              </div>
            </div>
            <Link
              href="http://t.me/FEEEE45"
              className={style.contact__socialLink}
            >
              <div className={style.contact__icon}>
                <div className={style.contact__border}>
                  <div className={style.contact__gmail}>
                    <Image
                      src="/svg/telegram.svg"
                      width={24}
                      height={24}
                      alt="email"
                    />
                    <span>Telegram</span>
                  </div>

                  <div className={style.contact__span}>
                    <span>Написать в Telegram</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/" className={style.contact__socialLink}>
              <div className={style.contact__icon}>
                <div className={style.contact__border}>
                  <div className={style.contact__gmail}>
                    <Image
                      src="/svg/whatsapp.svg"
                      width={24}
                      height={24}
                      alt="email"
                    />
                    <span>whatsapp</span>
                  </div>

                  <div className={style.contact__span}>
                    <span>Написать в whatsapp</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <form className={style.contact__form}>
            <div className={style.contact__formRow}>
              <div className={style.contact__formGroup}>
                <label className={style.contact__label} htmlFor="name">
                  Имя
                </label>
                <div className={style.contact__inputGradient}>
                  <input
                    className={style.contact__input}
                    placeholder="Ваше имя"
                    type="text"
                    id="name"
                  />
                </div>
              </div>
              <div className={style.contact__formGroup}>
                <label className={style.contact__label} htmlFor="email">
                  Почта
                </label>
                <div className={style.contact__inputGradient}>
                  <input
                    className={style.contact__input}
                    placeholder="Ваш email"
                    type="text"
                    id="email"
                  />
                </div>
              </div>
            </div>

            <div className={style.contact__formGroupText}>
              <label className={style.contact__label} htmlFor="message">
                Сообщение
              </label>
              <div className={style.contact__inputGradient}>
                <textarea
                  className={style.contact__textarea}
                  placeholder="Введите сообщение"
                  id="message"
                ></textarea>
              </div>
            </div>
          </form>

          <button className={style.contact__button}>Отправить сообщение</button>

          <div className={style.contact__bottom}>
            <div className={style.contact__card}>
              <div className={style.contact__cardHeader}>
                <div className={style.contact__cardIcon}>
                  <div className={style.contact__circle}></div>
                </div>
                <div className={style.contact__cardTitle}>
                  <h3>Готовы к сотрудничеству</h3>
                </div>
              </div>
              <p className={style.contact__cardText}>
                Команда Heades-team открыта к новым проектам. Мы разрабатываем
                лендинги, интерфейсы и сложные веб-системы. В нашей команде —
                фронтенд и бэкенд разработчики, дизайнеры и техлиды. Работаем с
                вниманием к деталям и вовлечённостью.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
