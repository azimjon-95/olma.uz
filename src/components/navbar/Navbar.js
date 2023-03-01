import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import i18next from "i18next";
import { BiPhoneCall } from "react-icons/bi";
import { TbLanguage } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const [language, setLanguage] = useState(false);
  const handleClick = (lang) => {
    i18next.changeLanguage(lang);
  };
  // const t = Translation()
  return (
    <>
      <div className="Navbar_box">
        <div className="container gooo">
          <div className="Navbar">
            <div className="Nav_Left">
              <button className="bayInOlcha">olma da soting</button>
            </div>
            <div className="Nav_Righ">
              <h2>+998 (94) 432 445 4</h2>
              <span className="Btn_leng_main" onClick={() => setLanguage(true)}>
                <TbLanguage className="svg_leng_main" />
                <div
                  className={`Language_Box ${language ? "Language_show" : ""}`}
                >
                  <button onClick={() => handleClick("krel")}>Ўзб</button>
                  <button onClick={() => handleClick("uz")}>Uz</button>
                  <button onClick={() => handleClick("rus")}>Рус</button>
                </div>
              </span>
            </div>
            {language && (
              <div
                className="Open_close"
                onClick={() => setLanguage(false)}
              ></div>
            )}

            <div className="Media_Box">
              <button>
                <BiPhoneCall />
              </button>

              <NavLink to="/" className="Logo_Box_nav">
                olma
              </NavLink>

              <span className="Btn_leng_main" onClick={() => setLanguage(true)}>
                {language ? (
                  <AiOutlinePlus
                    className="OutlinePlus"
                    onClick={() => setLanguage(false)}
                  />
                ) : (
                  <TbLanguage className="svg_leng_main" />
                )}

                <div
                  className={`Language_Box ${language ? "Language_show" : ""}`}
                >
                  <button onClick={() => handleClick("krel")}>Ўзб</button>
                  <button onClick={() => handleClick("uz")}>Uz</button>
                  <button onClick={() => handleClick("rus")}>Рус</button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
