"use client";
import style from "./Skills.module.css";
import Tilt from "react-parallax-tilt";

const tiltOptions = {
  glareEnable: true,
  glareMaxOpacity: 0.4,
  glareColor: "#ffffff",
  glarePosition: "all",
  tiltMaxAngleX: 15,
  tiltMaxAngleY: 15,
  transitionSpeed: 600,
  scale: 1.03,
  gyroscope: true,
};

export const Skills = () => {
  return (
    <section id="skills-section" className={style.skills}>
      <div className={style.skills__container}>
        <div className={style.skills__header}>
          <h1>Навыки нашей команды</h1>
          <p>
            Мы объединяем экспертизу в разработке и дизайне — от интерфейсов до
            серверной логики.
          </p>
        </div>
        <div className={style.skills__cards}>
          <Tilt
            {...tiltOptions}
            className={`${style.skills__card} ${style.frontend}`}
          >
            <h1 className={style.skills__card__title}>Frontend</h1>
            <ul className={style.skills__card__list}>
              <li>React, Next.js</li>
              <li>TypeScript, JavaScript</li>
              <li>Tailwind CSS, SCSS</li>
              <li>Redux, Zustand</li>
              <li>Адаптивная верстка</li>
            </ul>
          </Tilt>

          <Tilt
            {...tiltOptions}
            className={`${style.skills__card} ${style.backend}`}
          >
            <h1 className={style.skills__card__title}>Backend</h1>
            <ul className={style.skills__card__list}>
              <li>Node.js, Express</li>
              <li>PostgreSQL, MongoDB</li>
              <li>REST, GraphQL</li>
              <li>JWT, OAuth</li>
              <li>Docker, CI/CD</li>
            </ul>
          </Tilt>

          <Tilt
            {...tiltOptions}
            className={`${style.skills__card} ${style.uiux}`}
          >
            <h1 className={style.skills__card__title}>UI/UX & Дизайн</h1>
            <ul className={style.skills__card__list}>
              <li>Figma, Adobe XD</li>
              <li>Wireframing & Prototyping</li>
              <li>Design Systems</li>
              <li>Анимации и микровзаимодействия</li>
              <li>UX-исследования</li>
            </ul>
          </Tilt>
        </div>
      </div>
    </section>
  );
};
