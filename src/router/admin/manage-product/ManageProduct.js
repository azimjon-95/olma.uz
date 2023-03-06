import React, { useState, useEffect } from "react";
import p from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../../../hooks/useCart";
import { addHeart } from "../../../hooks/useFavorite";
import NoImg from "../../../assets/noImg.jpg";
import axios from "../../../api";
import { BsCart2 } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

function ManageProduct() {
  const [base, setBase] = useState([]);
  const [loading, setLoading] = useState(false);
  const reload = useSelector((s) => s.reload);
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.reduxCart);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => {
        setBase(res.data.data || []);
        if (res.data.state) {
          setLoading(false);
        }
      })
      .catch((err) => console.log("err>>", err));
  }, [reload]);

  const addToCart = (pro) => {
    console.log(pro);
    return addCart(pro, cart, dispatch);
  };

  const addToFavorites = (item) => {
    return addHeart(item, dispatch);
  };
  const [fly, setFly] = useState(false);

  return (
    <div className={p.product_container}>
      {base?.map((item, inx) => (
        <div key={inx} className={p.product_item}>
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
            <img className={p.pro_img} src={item.img || NoImg} alt="" />
          </NavLink>
          <p className={p.pro_title}>{item.item}</p>

          <p className={p.pro_price}>{item.price.brm()} so'm</p>
          <p className={p.pro_month}>
            {Math.floor((item?.price / 10) * 1.1).brm()}
          </p>

          <div style={{ width: "100%", display: "flex" }}>
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
      ))}
    </div>
  );
}

export default ManageProduct;
