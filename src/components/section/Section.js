import React from "react";
import p from "./section.module.css";
import {NavLink} from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { IoIosStats } from "react-icons/io";
import {} from "number-brm";
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCart } from "../../hooks/useCart";
import { addHeart } from "../../hooks/useFavorite";

function Section({ base }) {
  const cart = useSelector((s) => s.reduxCart);
  const heart = useSelector((s) => s.addToHeart).map((i) => i._id); // for heart custom
  const dispatch = useDispatch();

  const addToCart = (pro) => {
    return addCart(pro, cart, dispatch, toast);
  };

  const addToFavorites = (item) => {
    return addHeart(item, dispatch, toast);
  };
  return (
    <div className={p.wrapper}>
      <Swiper
        slidesPerView={5}
        // spaceBetween={}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={p.swiper}
      >
        {base?.map((value, inx) => (
          <SwiperSlide key={inx} className={p.swiper_slide}>
            <div className={p.product_item}>
              <span className={p.pro_heart}>
                {heart.some((i) => i === value._id) ? (
                  <AiFillHeart  className={p.BiHeart} onClick={() => addToFavorites(value)} />
                ) : (
                  <BiHeart onClick={() => addToFavorites(value)} />
                )}
              </span>
              <span className={p.pro_stats}>
                <IoIosStats />
              </span>
              <NavLink className={p.NavLink} to={`/product/${value?._id}`}>
                <img className={p.pro_img} src={value.img} alt="" />
              </NavLink>
              <p className={p.pro_title}>{value.item}</p>
              <del className={p.del_price}>{value?.del_price}</del>
              <p className={p.pro_price}>{value.price.brm()} so'm</p>
              <p className={p.pro_month}>
                {Math.floor((value?.price / 10) * 1.1).brm()}
              </p>

              <div style={{ width: "auto", display: "flex" }}>
                <button
                  onClick={() => addToCart(value)}
                  className={p.pro_addCart}
                >
                  <BsCart2 />
                </button>
                <button className={p.pro_money}>Muddatli to'lov</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer />
    </div>
  );
}

export default Section;
