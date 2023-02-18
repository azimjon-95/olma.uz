import React, { useEffect, useState } from "react";
import s from "./carusel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { caruselData } from "../../utils/caruselData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../hooks/useCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addHeart } from "../../hooks/useFavorite";
import axios from "../../api";

const Carusel = () => {
  const [base, setBase] = useState([]);
  const [loading, setLoading] = useState(false);
  const reload = useSelector((s) => s.reload);
  const cart = useSelector((s) => s.reduxCart);
  const heart = useSelector((s) => s.addToHeart).map((i) => i._id); // for heart custom

  const dispatch = useDispatch();
  const dataBase = base.splice(10, 3);

  const addToCart = (pro) => {
    return addCart(pro, cart, dispatch, toast);
  };

  const addToFavorites = (item) => {
    return addHeart(item, dispatch, toast);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => {
        setBase(res.data.data || []);
      })
      .catch((err) => console.log("err>>", err))
      .finally(() => {
        setLoading(false);
      });
  }, [reload]);

  return (
    <div className={s.Container}>
      <div className={s.Carusel_Left}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {caruselData?.map((value, inx) => {
            return (
              <SwiperSlide key={inx}>
                <div className={s.Slide_img}>
                  <img src={value?.url} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>


      
    </div>
  );
};

export default Carusel;
