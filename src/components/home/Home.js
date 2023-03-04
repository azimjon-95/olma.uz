import React, { useEffect, useState } from "react";
import Carusel from "../carusel/Carusel";
import s from "./home.module.css";
import Properties from "../properties/Properties";
import Recommendat from "../category/Category";
import Item from "../item/Item";

import axios from "../../api";
import { useSelector } from "react-redux";

const Home = () => {
  const [base, setBase] = useState([]);
  const [loading, setLoading] = useState(false);
  const reload = useSelector((s) => s.reload);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => {
        setBase(res.data.innerData || []);
        if (res.data.state) {
          setLoading(false);
        }
      })
      .catch((err) => console.log("err>>", err));
  }, [reload]);

  return (
    <div className="container">
      <Carusel />
      <Recommendat />
      {!loading ? (
        <>
          <Properties base={base} />
          <Item base={base} />
        </>
      ) : (
        <div className={s.Loadin}>
          <h3 className={s.Load}>Loading</h3>
          <h1 className={s.Load_1}>.</h1>
          <h1 className={s.Load_2}>.</h1>
          <h1 className={s.Load_3}>.</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
