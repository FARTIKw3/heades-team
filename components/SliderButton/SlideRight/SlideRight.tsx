"use client";
import Image from "next/image";
import style from "./SlideRight.module.css";
import { useSwiper } from "swiper/react";

export const SlideRight = () => {
  const swiper = useSwiper();
  return (
    <div className={style.wrapper} onClick={() => swiper.slideNext()}>
      <div>
        <Image
          src="/svg/arrowRight.svg"
          width={55}
          height={37}
          alt="slidePrev"
        />
      </div>
    </div>
  );
};
