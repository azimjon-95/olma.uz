import React from "react";
import c from "./reco.module.css";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { CategoryData } from "../../utils/categoryData";

function Category() {
  return (
    <>
      <div className={c.wrapper}>
        <Swiper
          slidesPerView={7}
          spaceBetween={25}
          slidesPerGroup={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={c.swiper}
        >
          {CategoryData?.map((item, inx) => (
            <SwiperSlide className={c.swiper_slide} key={inx}>
              <div className={c.swiper_items}>
                <div className={c.imgBox}>
                  <img src={item.img} />
                </div>{" "}
                <p className={c.swiper_text}>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={c.wrapperMedia}>
        <Swiper
          slidesPerView={5}
          spaceBetween={25}
          slidesPerGroup={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={c.swiper}
        >
          {CategoryData?.map((item, inx) => (
            <SwiperSlide className={c.swiper_slide} key={inx}>
              <div className={c.swiper_items}>
                <div className={c.imgBox}>
                  <img src={item.img} />
                </div>{" "}
                <p className={c.swiper_text}>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={c.wrapperTwo}>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={c.swiper}
        >
          {CategoryData?.map((item, inx) => (
            <SwiperSlide className={c.swiper_slide} key={inx}>
              <div className={c.swiper_items}>
                <div className={c.imgBox}>
                  <img src={item.img} />
                </div>{" "}
                <p className={c.swiper_text}>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Category;
