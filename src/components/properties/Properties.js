import React, { useState } from "react";
import p from "./Properties.module.css";
import { IoIosStats } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {} from "number-brm";
import { addCart } from "../../hooks/useCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addHeart } from "../../hooks/useFavorite";
import NoImg from "../../assets/noImg.jpg";
import { NavLink } from "react-router-dom";
import Fly from "../flyToCart/Fly";
function Properties({ base }) {
  const pageNumbers = [];

  const cart = useSelector((s) => s.reduxCart);
  const heart = useSelector((s) => s.addToHeart).map((i) => i._id); // for heart custom

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = base.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(base.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const addToCart = (pro) => {
    console.log(pro);
    return addCart(pro, cart, dispatch, toast);
  };

  const addToFavorites = (item) => {
    return addHeart(item, dispatch, toast);
  };

  const [fly, setFly] = useState(false);
  return (
    <div className={p.popular_product}>
      <div className={p.Banner}>
        <h1>Ommabop mahsulotlar</h1>
      </div>

      <div className={p.product_paginate}>
        <div className={p.product_container}>
          {currentPosts?.map((item, inx) => (
            <>
              <div key={inx} className={p.product_item}>
                <span className={p.pro_heart}>
                  {heart.some((i) => i === item._id) ? (
                    <AiFillHeart
                      className={p.BiHeart}
                      onClick={() => addToFavorites(item)}
                    />
                  ) : (
                    <BiHeart onClick={() => addToFavorites(item)} />
                  )}
                </span>
                <span className={p.pro_stats}>
                  <IoIosStats />
                </span>
                <NavLink className={p.NavLink} to={`/product/${item?._id}`}>
                  <img className={p.pro_img} src={item.img || NoImg} alt="" />
                </NavLink>
                <p className={p.pro_title}>{item.item}</p>
                {/* <del className={p.del_price}>{item?.del_price}</del> */}
                <p className={p.pro_price}>{item.price.brm()} so'm</p>
                <p className={p.pro_month}>
                  {Math.floor((item?.price / 10) * 1.1).brm()}
                </p>

                <div style={{ width: "auto", display: "flex" }}>
                  <button
                    onClick={() => {
                      addToCart(item);
                      setFly(item?.img);
                    }}
                    className={p.pro_addCart}
                  >
                    <BsCart2 />
                  </button>
                  <button className={p.pro_money}>Muddatli to'lov</button>
                </div>
              </div>
            </>
          ))}
          {fly.length ? <Fly fly={fly} /> : ""}
        </div>

        <div className={p.Pagination}>
          {pageNumbers.map((value) => {
            return (
              <button onClick={() => paginate(value)} key={value}>
                {value}
              </button>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Properties;
