import React from "react";
import p from "./item.module.css";
import { IoIosStats } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import {} from "number-brm";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCart } from "../../hooks/useCart";
import { addHeart } from "../../hooks/useFavorite";

const Item = ({ base }) => {
  const DataSplice = base.slice(10, 13);
  const DataFilter = base.slice(17, 19);

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
    <>
      <div className={p.Container}>
        <div className={p.Box_Left}>
          {DataFilter?.map((item, inx) => (
            <div key={inx} className={p.Left_pro}>
              <span className={p.pro_stats}>
                {heart.some((i) => i === item._id) ? (
                  <AiFillHeart  className={p.BiHeart} onClick={() => addToFavorites(item)} />
                ) : (
                  <BiHeart onClick={() => addToFavorites(item)} />
                )}
              </span>
              <span className={p.pro_heart}>
                <IoIosStats />
              </span>

              <NavLink to={`/product/${item?._id}`} className={p.Container_img}>
                <img className={p.pro_img} src={item.img} alt="" />
              </NavLink>

              <div className={p.Container_imfo}>
                <p className={p.pro_title}>{item.item}</p>
                <del className={p.del_price}>{item?.del_price}</del>
                <p className={p.pro_price}>{item.price.brm()} so'm</p>
                <p className={p.pro_month}>
                  {Math.floor((item?.price / 10) * 1.1).brm()}
                </p>

                <div style={{ width: "auto", display: "flex" }}>
                  <button
                    onClick={() => addToCart(item)}
                    className={p.pro_addCart}
                  >
                    <BsCart2 />
                  </button>
                  <button className={p.pro_money}>Muddatli to'lov</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={p.Box_Right}>
          {DataSplice?.map((item, inx) => (
            <div key={inx} className={p.Right}>
              <span className={p.pro_heart}>
                {heart.some((i) => i === item._id) ? (
                  <AiFillHeart className={p.BiHeart} onClick={() => addToFavorites(item)} />
                ) : (
                  <BiHeart onClick={() => addToFavorites(item)} />
                )}
              </span>
              <span className={p.pro_stats}>
                <IoIosStats />
              </span>
              <NavLink className={p.NavLink} to={`/product/${item?._id}`}>
                <img className={p.pro_img} src={item.img} alt="" />
              </NavLink>
              <p className={p.pro_title}>{item.item}</p>
              <del className={p.del_price}>{item?.del_price}</del>
              <p className={p.pro_price}>{item.price.brm()} so'm</p>
              <p className={p.pro_month}>
                {Math.floor((item?.price / 10) * 1.1).brm()}
              </p>

              <div style={{ width: "auto", display: "flex" }}>
                <button
                  onClick={() => addToCart(item)}
                  className={p.pro_addCart}
                >
                  <BsCart2 />
                </button>
                <button className={p.pro_money}>Muddatli to'lov</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Item;
