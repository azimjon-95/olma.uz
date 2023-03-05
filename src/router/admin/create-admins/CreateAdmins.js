import React, { useState } from "react";
import "./CreateAdmins.css";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import axios from "../../../api/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

function CreateAdmins() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const createProduct = (e) => {
    setLoading(true);
    e.preventDefault();
    let newPro = {
      fname,
      lname,
      age,
      phoneNum,
      gender,
      username,
      password,
      // isActive: true,
    };

    axios
      .post("/admin", newPro)
      .then((res) => {
        console.log(res?.innerData?.state);
        if (!res?.data?.state) {
          return toast(res?.innerData?.msg);
        }
        setFname("");
        setLname("");
        setAge("");
        setGender("");
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

  return (
    <div className="createadmins_container">
      <h1>Yangi Adminlar yarating!</h1>
      <form className="createadmins_form" onSubmit={createProduct} action="">
        <div className="inputs_oncontainer">
          <input
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            type="text"
            className="createadmins_inputs"
            placeholder="Adminning ismini kiriting"
            required
            minLength={3}
            style={{
              outline: fname.length >= 3 && "2px solid green",
            }}
          />
          {fname.length >= 3 ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            <AiOutlineCloseCircle style={{ color: "red" }} />
          )}
        </div>

        <div className="inputs_oncontainer">
          <input
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
            minLength={3}
            type="text"
            className="createadmins_inputs"
            placeholder="Adminning familiyasini kiriting"
            style={{
              outline: lname.length >= 3 && "2px solid green",
            }}
          />
          {lname.length >= 3 ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            <AiOutlineCloseCircle style={{ color: "red" }} />
          )}
        </div>

        <div className="inputs_oncontainer">
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            type="number"
            className="createadmins_inputs"
            placeholder="Adminning yoshini kiriting"
            style={{ outline: age && "2px solid green" }}
          />
          {age ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            <AiOutlineCloseCircle style={{ color: "red" }} />
          )}
        </div>

        <div className="inputs_oncontainer">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="createadmins_inputs"
            style={{ outline: gender && "2px solid green" }}
          >
            <option value="">Adminning jinsini kiriting</option>
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
          </select>
          {gender ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            <AiOutlineCloseCircle style={{ color: "red" }} />
          )}
        </div>

        <div className="inputs_oncontainer">
          <input
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            required
            minLength={9}
            maxLength={12}
            type="number"
            className="createadmins_inputs"
            placeholder="Adminning mobil raqamini kiriting. Misol: 998905467894"
            style={{
              outline: phoneNum && "2px solid green",
            }}
          />
          {phoneNum ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            <AiOutlineCloseCircle style={{ color: "red" }} />
          )}
        </div>

        <div className="inputs_oncontainer">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={4}
            type="text"
            className="createadmins_inputs"
            placeholder="Adminga username yozing"
            style={{
              outline: username.length >= 4 && "2px solid green",
            }}
          />
          {username.length >= 4 ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            <AiOutlineCloseCircle style={{ color: "red" }} />
          )}
        </div>

        <div className="inputs_oncontainer">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={4}
            type="text"
            className="createadmins_inputs"
            placeholder="Adminga parol yozing"
            style={{
              outline: password.length >= 4 && "2px solid green",
            }}
          />
          {password.length >= 4 ? (
            <AiOutlineCheckCircle style={{ color: "green" }} />
          ) : (
            <AiOutlineCloseCircle style={{ color: "red" }} />
          )}
        </div>
        <button>Admin yaratish</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default CreateAdmins;
