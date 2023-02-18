import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./register.css";
import axios from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Register = ({ show, setShows, setShowReg }) => {
  const [eye, setEye] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [img, setImg] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // ___________________create_product_________________________
  const createProduct = (e) => {
    setLoading(true);
    e.preventDefault();
    let newPro = { fname, lname, img, age, phoneNum, country, username, password };
    console.log(newPro);

    axios
      .post("/user", newPro)
      .then((res) => {
        console.log(res?.innerData?.state);
        if (!res?.data?.state) {
          return toast(res?.innerData?.msg);
        }
        setFname("");
        setLname("");
        setAge("");
        setImg("");
        setCountry("");
        setPhoneNum("");
        setUsername("");
        setPassword("");
        toast("You have successfully registered!");
        dispatch({ type: "RELOAD" });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  function eyeShow() {
    setEye(!eye);
  }
  return (
    <>
      {show && (
        <div onClick={() => setShows(false)} className="Container"></div>
      )}

      <form action="" onSubmit={createProduct} className={`Box_reg ${show ? "shows" : ""}`}>
        <div className="Logouts">
          <p onClick={() => setShows(false)}>+</p>
        </div>
        <h2>Tizimga kirish</h2>
        <input
          className="Inp_reg"
          type="text"
          value={fname}
          placeholder="First name..."
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          className="Inp_reg"
          type="text"
          value={lname}
          placeholder="Last name..."
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          className="Inp_reg"
          type="text"
          value={img}
          placeholder="Image..."
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          className="Inp_reg"
          type="text"
          value={age}
          placeholder="Age..."
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="Inp_reg"
          type= "text"
          value={phoneNum}
          placeholder="Phone number..."
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <input
          className="Inp_reg"
          type="text"
          value={country}
          placeholder="Country..."
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          className="Inp_reg"
          type="text"
          value={username}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="Inp">
          <input
            type={eye ? "text" : "password"}
            value={password}
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={eyeShow}>
            {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <button disabled={loading}>{loading? "Loading..." : "Submit"}</button>
        <span>
          <p
            onClick={() => {
              setShowReg(true);
              setShows(false);
            }}
          >
            Tzimga kirish
          </p>
        </span>
      </form>
      <ToastContainer />
    </>
  );
};

export default Register;
