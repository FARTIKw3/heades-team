"use client";
import Image from "next/image";
import style from "./SlideLeft.module.css";
import { useSwiper } from "swiper/react";
export const SliderLeft = () => {
  const swiper = useSwiper();
  return (
    <div className={style.wrapper} onClick={() => swiper.slidePrev()}>
      <div>
        <Image
          src="/svg/arrowLeft.svg"
          width={55}
          height={37}
          alt="slidePrev"
        />
      </div>
    </div>
  );
};
