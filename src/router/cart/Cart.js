import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./cart.module.css";
import { GiBroom } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {} from "number-brm";
import { increment, decriment } from "../../hooks/useCart";
const Cart = () => {
  const reduxCart = useSelector((s) => s.reduxCart);
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.reduxCart);

  function CLEARE_CART() {
    dispatch({ type: "CLEARE_CART", payload: [] });
  }
  function REMOVE_PROD_FROM_CART(_id) {
    dispatch({ type: "REMOVE_PROD_FROM_CART", payload: _id });
  }

  const incer = (pro) => {
    return increment(pro, dispatch, cart);
  };

  console.log(reduxCart);

  const decr = (pro) => {
    return decriment(pro, dispatch, cart);
  };
  return (
    <div className="container">
      {reduxCart.length ? (
        <div className={s.Cart}>
          <div className={s.Left}>
            <div className={s.Left_title}>
              <h1>Savatchada {reduxCart.length} mahsulot bor</h1>
              <button onClick={CLEARE_CART}>
                <GiBroom />
                Delete All
              </button>
            </div>
            {reduxCart?.map((value, inx) => {
              return (
                <div key={inx} className={s.Cart_Pro}>
                  <div className={s.Cart_img}>
                    <img src={value?.img} alt="" />
                  </div>
                  <div className={s.Cart_item}>
                    <h2>{value?.item}</h2>
                    <p>Technohouse.uz</p>
                    <div className={s.Cart_Click}>
                      <button>Sevimlilarga qo'shish</button>
                      <p>|</p>
                      <button onClick={() => REMOVE_PROD_FROM_CART(value._id)}>
                        Oʻchirish
                      </button>
                    </div>
                  </div>
                  <div className={s.Cart_Price}>
                    <div className={s.INCR_DECR_Box}>
                      <button
                        onClick={() => decr(value)}
                        disabled={value.number <= 0 && REMOVE_PROD_FROM_CART(value._id)}
                      >
                        <b></b>
                      </button>
                      <p>{value.number}</p>
                      <button onClick={() => incer(value)}>+</button>
                    </div>
                    <h2>
                      {(value.price * value.number).brm()}{" "}
                      so'm
                    </h2>
                  
                  </div>
                </div>
              );
            })}
            {/* .brm()
             */}
          </div>
          <div className={s.Right}>
            <div className={s.All_price}>
              <h1>Jami:</h1>
              <h2>
                {reduxCart
                  ?.reduce((a, { price, number }) => a + price * number, 0)
                  .brm()}{" "}
                so'm
              </h2>
            </div>
            <div className={s.Box_promacod}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Promokodni kirgazing"
              />
              <button>Kiritish</button>
            </div>
            <span className={s.Info}>
              <h3>Qiymati</h3>
              <p>6 829 000 so'm</p>
            </span>
            <span className={s.Info}>
              <h3>Promokod:</h3>
              <p>0 so'm</p>
            </span>
            <span className={s.Info}>
              <h3>Naqd pul to'lash uchun komissiya miqdori:</h3>
              <p>0 %</p>
            </span>
            <span className={s.Info}>
              <h3>Yetkazib berish summasi:</h3>
              <p>0 so'm</p>
            </span>
            <hr />
            <span className={s.Info}>
              <h3>Yetkazib berish:</h3>
              <p>Kurer orqali yetqazib berish</p>
            </span>
            <span className={s.Info}>
              <h3>Buyurtma turi:</h3>
            </span>
            <span className={s.Info}>
              <h3>To'lov turi:</h3>
              <p>To'liq to'lash</p>
            </span>
            <p>Вы не авторизованы</p>
            <button>Buyurtma berish</button>
          </div>
        </div>
      ) : (
        <div className={s.Empty_Cart}>
          <div className={s.Empty_Box}>
            <div className={s.Empty_img}>
              <img src="https://olcha.uz/_nuxt/cart.de8a9297.png" alt="" />
            </div>
            <h1>Savatchangiz bo'sh</h1>
            <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>

            <NavLink to="/">Asosiy sahifaga</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
