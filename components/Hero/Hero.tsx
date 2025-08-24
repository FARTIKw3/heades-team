import style from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div>
        <h1 className={style.hero__title}>Мы — больше, чем просто команда</h1>
        <p className={style.hero__destcription}>
          Hades-team молодая команда разработчиков и дизайнеров, которая быстро
          набирает обороты. Мы собрали фронтов, беков, UX/UI-дизайнеров и других
          специалистов, чтобы вместе создавать сильные цифровые продукты.
          Проектов пока не так много но каждый из них с результатом, которым мы
          гордимся. О нас уже говорят хорошо, и это только начало. Дальше —
          больше.
        </p>
        <div className={style.hero__btns}>
          <button className={style.hero__btn}>заказать</button>
        </div>
      </div>
      <div className={style.hero__styts}>
        <div className={style.hero__styts__item}>
          <div>
            <span className={style.hero__styts__number}>1</span>
          </div>
          <div>
            <span className={style.hero__styts__text}>Лет опыта</span>
          </div>
        </div>
        <div className={style.hero__styts__item}>
          <div>
            <span className={style.hero__styts__number}>50+</span>
          </div>
          <div>
            <span className={style.hero__styts__text}>Проектов</span>
          </div>
        </div>
        <div className={style.hero__styts__item}>
          <div>
            <span className={style.hero__styts__number}>20+</span>
          </div>
          <div>
            <span className={style.hero__styts__text}>Клиентов</span>
          </div>
        </div>
      </div>
    </div>
  );
};
