import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "../../api";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

function UpdateProduct({ show, setShow, total }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  

  const [updateData, setUpdateDate] = useState({
    item: "",
    price: 0,
    url: "",
    category: "",
  });
  useEffect(() => {
    if (total) {
      setUpdateDate(total);
    }
  }, [total]);

  const hendleChange = (e) => {
    setLoading(true);
    const { item, img, price, category, _id } = updateData;

    axios
      .put(`/products/${_id}`, { item, img, price, category })
      .then((res) => {
        console.log(res);
        if (res?.data?.state) {
          setShow(false);
          dispatch({ type: "RELOAD" });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <>
      {show && (
        <div className="update__shadow" onClick={() => setShow(false)}></div>
      )}

      <div className={`Edit ${show ? "show" : ""}`}>
        <span>
          <p>Edit your products</p>
          <h2 onClick={() => setShow(false)}>
            <AiOutlinePlus />
          </h2>
        </span>

        <div className="Box_img_update">
          <div className="img_edit">
            <img src={updateData?.img} alt="" />
          </div>
          <div className="">
            <input
              value={updateData?.item}
              onChange={(e) =>
                setUpdateDate({ ...updateData, item: e.target.value })
              }
              type="text"
            />
            <input
              value={updateData?.price}
              onChange={(e) =>
                setUpdateDate({ ...updateData, price: +e.target.value })
              }
              type="number"
            />
            <input
              value={updateData?.img}
              onChange={(e) =>
                setUpdateDate({ ...updateData, img: e.target.value })
              }
              type="text"
            />

            <select
              onChange={(e) =>
                setUpdateDate({ ...updateData, category: e.target.value })
              }
            >
              <option value="televizory-audio-i-videotekhnika">
                Tv va audio
              </option>
              <option value="noutbuki-planshety-kompyutery">
                Kompyuterlar
              </option>
              <option value="telefony-gadzhety-aksessuary">
                Telefon va aksessuarlar
              </option>
              <option value="bytovaya-tekhnika-dlya-doma">
                Bytovaya tekhnika
              </option>
              <option value="tekhnika-dlya-kukhni">Oshxona uchun</option>
              <option value="sporttovary">Sporttovary</option>
              <option value="krasota-i-zdorove">Go‘zallik va salomatlik</option>
              <option value="avtomobilnye-aksessuary">
                Avtomobilnye aksessuary
              </option>
            </select>
          </div>
        </div>
        <button
          className="btn_change"
          disabled={loading}
          onClick={hendleChange}
        >
          {loading ? "Loading..." : "Change"}
        </button>
      </div>


    </>
  );
}

export default UpdateProduct;
