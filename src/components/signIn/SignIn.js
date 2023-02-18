import React, { useState } from "react";
import "./signin.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Register from "../register/Register";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../api";

const SignIn = ({ show, setShow }) => {
  const [showReg, setShowReg] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const signIn = (e) => {
    e.preventDefault();
    axios
      .post("user/sign-in", { username, password })
      .then((res) => {
        if (res.data.state) {
          localStorage.setItem("token", res.data.innerData.token);
          dispatch({ type: "LOG_IN", payload: res.data.innerData.user });
        }
        setUsername("");
        setPassword("");
        setShow(false)
      })
      .catch((err) => {
        console.log(err?.response?.data?.msg);
        setError(err?.response?.data?.msg);
      });
  };

  function eyeShow() {
    setEye(!eye);
  }
  return (
    <>
      {show && <div onClick={() => setShow(false)} className="Container"></div>}

      <form onSubmit={signIn} className={`Box ${show ? "show" : ""}`}>
        <div className="Logout">
          <p onClick={() => setShow(false)}>+</p>
        </div>
        <h2>Tizimga kirish</h2>
        <p className="error" style={{ opacity: error ? 1 : 0 }}>
          {error}
        </p>
        <input
          style={{
            border: error ? "1px solid red" : "none",
            color: error ? "red" : "",
          }}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="Inp"
          type="text"
          placeholder="Username..."
        />
        <div
          style={{ border: error ? "1px solid red" : "none" }}
          className="Inp"
        >
          <input
            style={{ color: error ? "red" : "" }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={eye ? "text" : "password"}
            placeholder="Password..."
          />
          <button onClick={eyeShow}>
            {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>

        <button>Submit</button>

        <span>
          <p>Parolingizni unutdingizmi?</p>
          <p
            onClick={() => {
              setShow(false);
              setShowReg(true);
            }}
          >
            Ro'yhatdan o'tish
          </p>
        </span>
      </form>
      <Register show={showReg} setShows={setShowReg} setShowReg={setShow} />
    </>
  );
};

export default SignIn;
