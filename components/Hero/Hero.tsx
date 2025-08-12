import Image from "next/image";
import style from "./Hero.module.css";

export const Hero = () => {
  return (
    <section id="Hero">
      <div className={style.container}>
        <div className={style.hero}>
          <div className={style.hero__img}>
            <Image
              src="/Hero.jpg"
              width={100}
              height={100}
              alt="Hero"
              className={style.img}
            />
          </div>
          {/* <h1 className={style.hero__title}>
            Мы <b className={style.hero__title__gradient}>Heades</b> Team
          </h1> */}
          <p className={style.hero__span}>
            Front-End и Back-End разработчики, а также UI/UX дизайнеры
          </p>
          <p className={style.hero__paragh}>
            Наша команда разрабатывает современные и удобные цифровые продукты,
            которые решают реальные проблемы. Мы любим чистый код, креативный
            дизайн и технологии, которые двигают всё вперёд.
          </p>
          <div className={style.hero__btnBlock}>
            <button className={style.hero__btnContact}>Связаться с нами</button>
            <button className={style.hero__btnProject}>
              Посмотреть работы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
