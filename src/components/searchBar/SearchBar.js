import React, { useEffect, useState } from "react";
import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { FiSearch, FiHeart, FiUserCheck } from "react-icons/fi";
import { BiHomeAlt, BiBarChart } from "react-icons/bi";
import { TbMoodSad, TbListSearch } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import SignIn from "../signIn/SignIn";
import axios from "../../api";

const SearchBar = () => {
  const [show, setShow] = useState(false);
  const cart = useSelector((s) => s.reduxCart);
  const heart = useSelector((s) => s.addToHeart);
  const auth = useSelector((s) => s?.auth);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const Style = {
    textDecoration: "none",
    color: "#fff",
  };

  const { text } = useTypewriter({
    words: [
      "Katalog bo'yicha qidirish",
      // t("Noutbook"),
    ],
    loop: { Infinity },
  });

  useEffect(() => {
    if (value.length) {
      setLoading(true);
      axios
        .get(`/products/search?searchingValue=${value}`)
        .then((res) => {
          setFilterData(res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  }, [value]);

  // console.log(filterData);
  // ---Personal modal-----
  // function modalShow() {
  //   setOpenModal(!openModal );
  // }

  const [scrollBorder, setScrollBorder] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setScrollBorder(true);
      } else {
        setScrollBorder(false);
      }
    });
  }, []);

  // const scrollUp = () =>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",

  //   })
  // }
  return (
    <div className={`Box_cont ${scrollBorder ? "Box_cont-show" : ""}`}>
      <div className="container">
        <div className="Search_Container">
          <NavLink to="/" className="Logo_Box">
            olma
          </NavLink>
          <div className="kotalog_Box">
            <label htmlFor="checkbox" className="hamburger">
              <input type="checkbox" id="checkbox" placeholder="o" />
              <span className="Line Line-main"></span>
              <span className="Line Line-split"></span>
            </label>
            <h3>Katalog</h3>
          </div>

          <div className="Search_Box">
            <button className="Left_btn_search">
              <FiSearch />
            </button>
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder={text}
            />
            <button className="Right_btn_search">
              <FiSearch />
            </button>
            {value && (
              <div
                className={`searching_products_container ${
                  value ? "searchOpen" : ""
                }`}
              >
                {filterData.length ? (
                  filterData?.map(({ item, img }, inx, id) => (
                    <Link
                      style={Style}
                      className="Sr_box"
                      onClick={() => setValue("")}
                      // to={`/singlepage/${id}`}
                      key={inx}
                    >
                      <div className="Img_box_filter">
                        <img src={img} alt="" />
                      </div>

                      <h3>{item.split(" ").slice(0, 6).join(" ")}...</h3>
                    </Link>
                  ))
                ) : loading ? (
                  <h1>Loading...</h1>
                ) : (
                  <div className="search_empty">
                    <TbMoodSad />
                    <p>Hech narsa topilmadi</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="Search_Menu_Box">
            <div className="Menu_Box desktopBlock">
              <TbListSearch />
              <p>Katalog</p>
            </div>
            <NavLink to="/favorites" className="Menu_Box">
              <FiHeart />
              <p>Sevimlilar</p>
              <span
                className={`cart_length ${
                  heart.length ? "showLeng" : "cart_length"
                }`}
              >
                {heart?.length}
              </span>
            </NavLink>
            <div className="Menu_Box desktopBlock">
              <BiHomeAlt />
              <p>Asosiy</p>
            </div>
            <NavLink to="/cart" className="Menu_Box">
              <BsCart2 />
              <p>Savatcha</p>
              <span
                className={`cart_length ${
                  cart.length ? "showLeng" : "cart_length"
                }`}
              >
                {cart?.length}
              </span>
            </NavLink>

            {auth ? (
              <>
                <div
                  className="Menu_Box"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <FiUserCheck />
                  <p>Admin</p>
                  <div className={`Menu ${openModal ? "Show" : ""}`}>
                    <div className="Menu__box">
                      <NavLink to="/myProfile" className="Menu_item">
                        My profile
                      </NavLink>
                      <span className="Menu_item">My Properties</span>
                      <NavLink to="/admin" className="Menu_item">
                        Admin panel
                      </NavLink>
                      <span
                        onClick={() => dispatch({ type: "LOG_OUT" })}
                        className="Menu_item"
                      >
                        Log out
                      </span>
                    </div>
                  </div>
                </div>
                {openModal && (
                  <div
                    className="Open_close"
                    onClick={() => setOpenModal(false)}
                  ></div>
                )}
              </>
            ) : (
              <div
                onClick={() => {
                  setShow(true);
                }}
                className="Menu_Box"
              >
                <AiOutlineUser />
                <p>Kirish</p>
              </div>
            )}
          </div>
        </div>
        <SignIn show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default SearchBar;
