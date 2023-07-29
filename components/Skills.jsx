"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SkillsComponents = () => {
  return (
    <div className="pt-12 mx-20">
      <Swiper
        className="pt-10"
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCreative,
          Autoplay,
        ]}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect="creative"
        loop={true}
        grabCursor={true}
        // cubeEffect={{
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="">
          <h2 className="text-3xl font-semibold">Track</h2>
          {/* <div className="flex justify-center items-center h-[17.5rem]"> */}
            <div className="grid grid-cols-2 gap-[0.625rem] mt-8">
              <div className="flex justify-center items-center text-2xl font-semibold">
                Frontend Development
              </div>
              <div className="flex justify-center items-center text-2xl font-semibold">
                Smart contract / Dapp Development
              </div>
            </div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide className="">
          <h2 className="text-3xl font-semibold">Languages</h2>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="flex justify-center items-center text-2xl font-semibold">
              Javascript
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              Typescript
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              Solidity
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              Python
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="text-3xl font-semibold">Technologies</h2>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="flex justify-center items-center text-2xl font-semibold uppercase">
              html
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              TailwindCSS
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              React
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              NextJs
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              NodeJs
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              Remix
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              Web3Js
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              etherJs
            </div>
            <div className="flex justify-center items-center text-2xl font-semibold">
              Git
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillsComponents;
