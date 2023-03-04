import React, { useRef } from "react";
import p from "./item.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import {} from "number-brm";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { addCart } from "../../hooks/useCart";
import { addHeart } from "../../hooks/useFavorite";
import { Autoplay, Pagination, Navigation } from "swiper";

const Item = ({ base }) => {
  const cart = useSelector((s) => s.reduxCart);
  // const heart = useSelector((s) => s.addToHeart).map((i) => i._id); // for heart custom
  const dispatch = useDispatch();

  const addToCart = (pro) => {
    return addCart(pro, cart, dispatch);
  };

  const addToFavorites = (item) => {
    return addHeart(item, dispatch);
  };
  return (
    <>
      <div className={p.Container}>
        <h1>Chegirmalar</h1>
        <div className={p.Box_Deck}>
          <Swiper
            slidesPerView={6}
            // spaceBetween={}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={p.swiper}
          >
            {base?.map((item, inx) => (
              <SwiperSlide key={inx} className={p.product_item}>
                {/* <span className={p.pro_heart}>
                    {heart.some((i) => i === item._id) ? (
                      <AiFillHeart
                        className={p.BiHeart}
                        onClick={() => addToFavorites(item)}
                      />
                    ) : (
                      <BiHeart onClick={() => addToFavorites(item)} />
                    )}
                  </span> */}
                {/* <span className={p.pro_stats}>
                  <IoIosStats />
                </span> */}
                <NavLink
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "center",
                  }}
                  className={p.NavLink}
                  to={`/product/${item?._id}`}
                >
                  <img className={p.pro_img} src={item.img} alt="" />
                </NavLink>
                <p className={p.pro_title}>{item.item}</p>
                {/* <del className={p.del_price}>{item?.del_price}</del> */}
                <p className={p.pro_price}>{item.price.brm()} so'm</p>
                <p className={p.pro_month}>
                  {Math.floor((item?.price / 10) * 1.1).brm()}
                </p>

                <div style={{ width: "100%", display: "flex" }}>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className={p.pro_addCart}
                  >
                    <BsCart2 />
                  </button>
                  <button className={p.pro_money}>Muddatli to'lov</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={p.Box_media}>
          <Swiper
            slidesPerView={4}
            // spaceBetween={}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={p.swiper}
          >
            {base?.map((item, inx) => (
              <SwiperSlide key={inx} className={p.product_item}>
                {/* <span className={p.pro_heart}>
                    {heart.some((i) => i === item._id) ? (
                      <AiFillHeart
                        className={p.BiHeart}
                        onClick={() => addToFavorites(item)}
                      />
                    ) : (
                      <BiHeart onClick={() => addToFavorites(item)} />
                    )}
                  </span> */}
                {/* <span className={p.pro_stats}>
                  <IoIosStats />
                </span> */}
                <NavLink
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "center",
                  }}
                  className={p.NavLink}
                  to={`/product/${item?._id}`}
                >
                  <img className={p.pro_img} src={item.img} alt="" />
                </NavLink>
                <p className={p.pro_title}>{item.item}</p>
                {/* <del className={p.del_price}>{item?.del_price}</del> */}
                <p className={p.pro_price}>{item.price.brm()} so'm</p>
                <p className={p.pro_month}>
                  {Math.floor((item?.price / 10) * 1.1).brm()}
                </p>

                <div style={{ width: "100%", display: "flex" }}>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className={p.pro_addCart}
                  >
                    <BsCart2 />
                  </button>
                  <button className={p.pro_money}>Muddatli to'lov</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={p.Box_mobil}>
          <Swiper
            slidesPerView={3}
            // spaceBetween={}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={p.swiper}
          >
            {base?.map((item, inx) => (
              <SwiperSlide key={inx} className={p.product_item}>
                {/* <span className={p.pro_heart}>
                    {heart.some((i) => i === item._id) ? (
                      <AiFillHeart
                        className={p.BiHeart}
                        onClick={() => addToFavorites(item)}
                      />
                    ) : (
                      <BiHeart onClick={() => addToFavorites(item)} />
                    )}
                  </span> */}
                {/* <span className={p.pro_stats}>
                  <IoIosStats />
                </span> */}
                <NavLink
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "center",
                  }}
                  className={p.NavLink}
                  to={`/product/${item?._id}`}
                >
                  <img className={p.pro_img} src={item.img} alt="" />
                </NavLink>
                <p className={p.pro_title}>{item.item}</p>
                {/* <del className={p.del_price}>{item?.del_price}</del> */}
                <p className={p.pro_price}>{item.price.brm()} so'm</p>
                <p className={p.pro_month}>
                  {Math.floor((item?.price / 10) * 1.1).brm()}
                </p>

                <div style={{ width: "100%", display: "flex" }}>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className={p.pro_addCart}
                  >
                    <BsCart2 />
                  </button>
                  <button className={p.pro_money}>Muddatli to'lov</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={p.Box_mobil_style}>
          <Swiper
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={p.swiper}
          >
            {base?.map((item, inx) => (
              <SwiperSlide key={inx} className={p.product_item}>
                {/* <span className={p.pro_heart}>
                    {heart.some((i) => i === item._id) ? (
                      <AiFillHeart
                        className={p.BiHeart}
                        onClick={() => addToFavorites(item)}
                      />
                    ) : (
                      <BiHeart onClick={() => addToFavorites(item)} />
                    )}
                  </span> */}

                <NavLink className={p.NavLink} to={`/product/${item?._id}`}>
                  <img className={p.pro_img} src={item.img} alt="" />
                </NavLink>
                <p className={p.pro_title}>{item.item}</p>
                {/* <del className={p.del_price}>{item?.del_price}</del> */}
                <p className={p.pro_price}>{item.price.brm()} so'm</p>
                <p className={p.pro_month}>
                  {Math.floor((item?.price / 10) * 1.1).brm()}
                </p>

                <div style={{ width: "100%", display: "flex" }}>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className={p.pro_addCart}
                  >
                    <BsCart2 />
                  </button>
                  <button className={p.pro_money}>Muddatli to'lov</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Item;
