import React, { useState } from "react";
import "./Order.css";
import { ORDERS } from "../../../utils/orderStatic";

function Order() {
  const [show, setShow] = useState(false);

  const orderShow = () => {
    setShow(true);
  };

  const cencelSHow = () => {
    setShow(false);
  };

  return (
    <div className="order">
      {ORDERS?.map((item, inx) => (
        <div className="order__item" key={inx}>
          <div className="order__items">
            <h1> A </h1>
          </div>
          <h2> {item.name}</h2>
          <p> +{item.tel} </p>
          <h4>{item.address} </h4>
          <div onClick={orderShow} className="order__card">
            {ORDERS?.map((card, inx) => (
              <div className="order__card-single" key={inx}>
                <h4> {card.orderItems.card.title} </h4>
                <h3>
                  {" "}
                  {card.orderItems.card.price.finalPrice *
                    item.orderItems.qty}{" "}
                  so'm{" "}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={`order__show ${show ? "orderShow" : ""}`}>
        {ORDERS?.map((i, inx) => (
          <div key={inx} className="order__show-single">
            <div className="order__show-single-img">
              <img src={i.orderItems.card.urls[0]} alt="" />
            </div>
            <button onClick={cencelSHow}>Cencel</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
