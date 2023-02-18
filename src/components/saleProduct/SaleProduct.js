import React from "react";
import p from "./SaleProduct.module.css";
import { IoIosStats } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import {} from "number-brm";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../hooks/useCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addHeart } from "../../hooks/useFavorite";
import { NavLink } from "react-router-dom";

function SaleProduct({ base }) {
  const DataSplice = base.slice(12, 16);
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
    <div className={p.popular_product}>
      <div className={p.product_container}>
        {DataSplice?.map((item, inx) => (
          <div key={inx} className={p.product_item}>
            <span className={p.pro_heart}>
              {heart.some((i) => i === item._id) ? (
                <AiFillHeart  className={p.BiHeart} onClick={() => addToFavorites(item)} />
              ) : (
                <BiHeart onClick={() => addToFavorites(item)} />
              )}
            </span>
            <span className={p.pro_stats}>
              <IoIosStats />
            </span>
            <NavLink to={`/product/${item?._id}`}>
              <img className={p.pro_img} src={item.img} alt="" />
            </NavLink>

            <p className={p.pro_title}>{item.item}</p>
            <del className={p.del_price}>{item?.del_price}</del>
            <p className={p.pro_price}>{item.price.brm()} so'm</p>
            <p className={p.pro_month}>
              {Math.floor((item?.price / 10) * 1.1).brm()}
            </p>

            <div style={{ width: "auto", display: "flex" }}>
              <button onClick={() => addToCart(item)} className={p.pro_addCart}>
                <BsCart2 />
              </button>
              <button className={p.pro_money}>Muddatli to'lov</button>
            </div>
          </div>
        ))}
      </div>
      <img
        className={p.sideCard}
        src="https://olcha.uz/image/272x444/homePage/19OpK99qgQEpsKQppPoQWHS36uPq9pyApdtWjJIw3JvbGFJ5VMcp5tlZtdL3.png"
        alt=""
      />
      <ToastContainer />
    </div>
  );
}

export default SaleProduct;
