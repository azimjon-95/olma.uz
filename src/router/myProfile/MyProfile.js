import React, { useState, useEffect } from "react";
import s from "./style.module.css";
import "./style.css";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import axios from "../../api";

import my from "../../assets/mi.png";
import {
  MdOutlinePublishedWithChanges,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { TiKeyOutline } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { useSelector, useDispatch } from "react-redux";
import { FaFacebook, FaTelegram, FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
  const [show, setShow] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const auth = useSelector((s) => s.auth);
  const [update, setUpdate] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  console.log(auth);
  const openShow = () => {
    setShow((s) => !s);
  };
  const showEdit = () => {
    setOpenEdit((e) => !e);
  };

  const [updateData, setUpdateDate] = useState({
    fname: "",
    lname: "",
    phoneNum: 0,
    username: "",
    password: "",
    age: "",
    img: "",
    category: "",
  });
  useEffect(() => {
    if (update) {
      setUpdateDate(update);
    }
  }, [update]);

  const hendleChange = (e) => {
    setLoading(true);
    const { username, password, age, img, fname, lname, category, _id } =
      updateData;

    axios
      .put(`/user/${_id}`, {
        username,
        password,
        age,
        img,
        fname,
        lname,
        category,
      })
      .then((res) => {
        console.log(res);
        if (res?.innerData?.state) {
          setShow(false);
          dispatch({ type: "RELOAD" });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className={s.Container}>
      <div className={s.top}>
        <div className={s.top_liner}></div>
        {auth && (
          <span className={s.top_span}>
            <div className={s.Non}>
              <div className={s.top_box}>
                <img src={auth?.img} alt="" />
                {openEdit ? (
                  <div className={s.inp_img}>
                    <label htmlFor="let"><MdOutlinePhotoCamera/></label>
                    <input type="file" id="let"/>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={s.Link}>
                <span>
                  <AiFillTwitterCircle />
                </span>
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <AiFillGithub />
                </span>
                <span>
                  <FaTelegram />
                </span>
              </div>
            </div>
            <div className={s.Fname_Lname}>
              {openEdit ? (
                <span>
                  <input
                    className={s.Inp_fname}
                    value={updateData?.fname}
                    type="text"
                    onChange={(e) =>
                      setUpdateDate({ ...updateData, fname: e.target.value })
                    }
                  />
                  <input
                    className={s.Inp_lname}
                    value={updateData?.lname}
                    type="text"
                    onChange={(e) =>
                      setUpdateDate({ ...updateData, lname: e.target.value })
                    }
                  />
                  <h2 onClick={showEdit}>
                    <MdOutlinePublishedWithChanges
                        onClick={hendleChange}
                     
                    />
                  </h2>
                </span>
              ) : (
                <span>
                  <h1>{auth?.fname}</h1>
                  <h1>{auth?.lname}</h1>
                  <h2 onClick={showEdit}>
                    <FaUserEdit  onClick={() => setUpdate(auth)}/>
                  </h2>
                </span>
              )}
              <div className={s.Username_Password}>
                {openEdit ? (
                  <div className={s.Username_Password_item}>
                    <AiOutlineUser />{" "}
                    <input
                      className={s.Inp_key}
                      type="text"
                      value={updateData?.username}
                      onChange={(e) =>
                        setUpdateDate({
                          ...updateData,
                          username: e.target.value,
                        })
                      }
                    />
                  </div>
                ) : (
                  <b className={s.Username_Password_item}>
                    <AiOutlineUser /> {auth?.username}
                  </b>
                )}

                {openEdit ? (
                  <span className={s.Username_Password_inp}>
                    <TiKeyOutline />
                    <input
                      className={s.Inp_key}
                      type={show ? "text" : "password"}
                      value={updateData?.password}
                      onChange={(e) =>
                        setUpdateDate({
                          ...updateData,
                          username: e.target.value,
                        })
                      }
                    />
                    <button className={s.btn_eye} onClick={openShow}>
                      {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                  </span>
                ) : (
                  <span className={s.Username_Password_titel}>
                    <TiKeyOutline />
                    {show ? <b>{auth?.password}</b> : <h3>*******</h3>}
                    <button className={s.btn_eye} onClick={openShow}>
                      {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                  </span>
                )}

                {openEdit ? (
                  <span className={s.Username_Password_age}>
                    <h4>Age:</h4>{" "}
                    <input
                      className={s.Inp_age}
                      value={updateData?.age}
                      type="text"
                      onChange={(e) =>
                        setUpdateDate({ ...updateData, age: e.target.value })
                      }
                    />{" "}
                  </span>
                ) : (
                  <span className={s.Username_Password_age}>
                    <h4>Age:</h4> <b>{auth?.age}</b>{" "}
                  </span>
                )}
              </div>

              <div className={s.Link_box}>
                {openEdit ? (
                  <span>
                    <TfiWorld />

                    <select
                      value={updateData?.category}
                      onChange={(e) =>
                        setUpdateDate({
                          ...updateData,
                          category: e.target.value,
                        })
                      }
                    >
                      <option disabled value="">
                        Country
                      </option>
                      <option value="">Uzekistan</option>
                      <option value="">Russia</option>
                      <option value="">USA</option>
                      <option value="">China</option>
                      <option value="">Germany</option>
                      <option value="">India</option>
                    </select>
                  </span>
                ) : (
                  <span className={s.name_country}>
                    <TfiWorld />
                    <b>{auth?.country}</b>{" "}
                  </span>
                )}

                {openEdit ? (
                  <div className={s.text_phone}>
                    <FiPhoneCall />{" "}
                    <input
                      className={s.Inp_phone}
                      type="text"
                      value={updateData?.phoneNum}
                      onChange={(e) =>
                        setUpdateDate({
                          ...updateData,
                          phoneNum: e.target.value,
                        })
                      }
                    />
                  </div>
                ) : (
                  <h3 className={s.text_phone}>
                    <FiPhoneCall /> {auth?.phoneNum}
                  </h3>
                )}
              </div>
            </div>
          </span>
        )}
      </div>
      <div className={s.main}></div>
      <div className={s.bottom}></div>
    </div>
  );
};

export default MyProfile;
