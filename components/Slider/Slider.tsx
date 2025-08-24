"use client";
import style from "./Slider.module.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderLeft } from "../SliderButton/SlideLeft/SliderLeft";
import { SlideRight } from "../SliderButton/SlideRight/SlideRight";

export const Slider = () => {
  return (
    <div className={style.wrapper}>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube]}
        className={style.swiper}
      >
        <div className={style.btnPrev}>
          <SliderLeft />
        </div>
        <SwiperSlide className={style.img}>
          <div className={style.text}>
            <h1>sadasd</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.img}>
          <div className={style.text}>
            <h1>123123</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.img}>
          <div className={style.text}>
            <h1>SS@@@@</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.img}>
          <div className={style.text}>
            <h1>SDSADASD#</h1>
          </div>
        </SwiperSlide>{" "}
        <div className={style.btnNext}>
          <SlideRight />
        </div>
      </Swiper>
    </div>
  );
};
