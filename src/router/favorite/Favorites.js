import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import p from "./favorite.module.css";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {} from "number-brm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCart } from "../../hooks/useCart";
import { addHeart, removeFromHeart } from "../../hooks/useFavorite";

const Favorites = () => {
  const data = useSelector((s) => s.addToHeart);
  // for heart custom
  const heart_id = useSelector((s) => s.addToHeart).map((i) => i._id);
  const cart = useSelector((s) => s.reduxCart);

  const dispatch = useDispatch();

  const addToFavorites = (item) => {
    return addHeart(item, dispatch, toast);
  };

  function deleteFromHeart(item) {
    return removeFromHeart(item, dispatch, toast);
  }

  const addToCart = (pro) => {
    return addCart(pro, cart, dispatch, toast);
  };

  return (
    <div className="container">
      {data.length ? (
        <div className={p.Cart}>
          {data?.map((item, inx) => (
            <div key={inx} className={p.product_item}>
              <span className={p.pro_heart}>
                {heart_id.some((i) => i === item._id) ? (
                  <AiFillHeart onClick={() => deleteFromHeart(item)} />
                ) : (
                  <BiHeart
                    className={p.red_heard}
                    onClick={() => addToFavorites(item)}
                  />
                )}
              </span>
              <NavLink className={p.NavLink} to={`/product/${item?._id}`}>
                <img className={p.pro_img} src={item.img} alt="" />
              </NavLink>
              <p className={p.pro_title}>{item.item}</p>
              <p className={p.pro_price}>{item.price.brm()} so'm</p>
              <p className={p.pro_month}>
                {Math.floor((item?.price / 10) * 1.1).brm()}
              </p>

              <div style={{ width: "100%", display: "flex" }}>
                <button
                  onClick={() => addToCart(item._id)}
                  className={p.pro_addCart}
                >
                  <BsCart2 />
                </button>
                <button className={p.pro_money}>Muddatli to'lov</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={p.Empty_Cart}>
          <div className={p.Empty_Box}>
            <div className={p.Empty_img}>
              <img src="https://olcha.uz/_nuxt/empty-img.3a4aef3b.png" alt="" />
            </div>
            <h1>Sevimli mahsulotlar yo'q</h1>
            <NavLink to="/">Asosiy sahifaga</NavLink>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Favorites;
