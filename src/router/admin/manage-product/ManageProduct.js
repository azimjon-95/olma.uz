import React, { useState, useEffect } from "react";
import p from "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../../../hooks/useCart";
import { addHeart } from "../../../hooks/useFavorite";
import NoImg from "../../../assets/noImg.jpg";
import axios from "../../../api";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageProduct() {
  const [base, setBase] = useState([]);
  const [loading, setLoading] = useState(false);
  const reload = useSelector((s) => s.reload);
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.reduxCart);
  const [deletPro, setDeletPro] = useState(false);

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

  //_____________Delete products_____________________
  const postDelete = (_id) => {
    axios.delete(`/products/${_id}`).then((res) => {
      console.log(res);
      dispatch({ type: "RELOAD" });
      toast("Malumot o'chirildi");
    });
  };
  return (
    <div className="product_container">
      {base?.map((item, inx) => (
        <div key={inx} className="product_item">
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
          <NavLink className="NavLink" to={`/product/${item?._id}`}>
            <img className="pro_img" src={item.img || NoImg} alt="" />
          </NavLink>
          <p className="pro_title">{item.item}</p>

          <p className="pro_price">{item.price.brm()} so'm</p>
          <p className="pro_month">
            {Math.floor((item?.price / 10) * 1.1).brm()}
          </p>

          <div style={{ width: "100%", display: "flex" }}>
            <button onClick={() => setDeletPro(true)} className="pro_addCart">
              <RiDeleteBinLine />
            </button>

            {deletPro && (
              <div
                className="delete__shadow"
                onClick={() => setDeletPro(false)}
              ></div>
            )}
            <div className={` DeletePro ${deletPro ? "DelShow" : ""}`}>
              <p>You are really sure. Delete, {item.item}?</p>
              <span>
                <button onClick={() => postDelete(item._id)}>Yes</button>

                <button onClick={() => setDeletPro(false)}>No</button>
              </span>
            </div>
            <button className="pro_money">
              <GrUpdate />
              O'zgartirish
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default ManageProduct;
