import React, { useState, memo } from "react";
import "./Sidebar.css";
import { AiOutlineBars, AiFillHome } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiDoorOpen } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { ADMINS_ROUTER } from "../../utils/adminRouter";
import { useSelector, useDispatch } from "react-redux";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();

  const Style = {
    textDecoration: "none",
  };
  return (
    <>
      <div className={`big__sidebar ${sidebar ? "sidebar_show" : ""}`}>
        {sidebar ? (
          <div className="bigSidebar__box">
            <HiOutlineUserCircle onClick={() => setSidebar(true)} />
            <NavLink
              style={Style}
              to="/"
              className={`categories_title ${sidebar ? "" : "title_show"}`}
            >
              Olma.uz
            </NavLink>
            <IoMdClose
              onClick={() => setSidebar(false)}
              className={`categories_icon ${sidebar ? "" : "icon_show"}`}
            />
          </div>
        ) : (
          <div
            className="bigSidebar__categories"
            onClick={() => setSidebar(true)}
          >
            <span>
              <AiOutlineBars />
            </span>
          </div>
        )}
        <NavLink style={Style} to="/admin" className="bigSidebar__categories">
          <span className="menu_icon">
            <AiFillHome />
          </span>
          <h3 className={`categories_title ${sidebar ? "" : "title_show"}`}>
            Asosiy sahifa
          </h3>
        </NavLink>
        {ADMINS_ROUTER?.map(({ icon, path, title }, inx) => (
          <NavLink
            style={Style}
            key={inx}
            to={path.slice(1)}
            className="bigSidebar__categories"
          >
            <span className="menu_icon">{icon}</span>
            <h3 className={`categories_title ${sidebar ? "" : "title_show"}`}>
              {title}
            </h3>
          </NavLink>
        ))}
        <div
          onClick={() => dispatch({ type: "LOG_OUT" })}
          className="bigSidebar__categories"
        >
          <span>
            <BiDoorOpen />
          </span>
          <h3 className={`categories_title ${sidebar ? "" : "title_show"}`}>
            Tizimdan chiqish
          </h3>
        </div>
      </div>
      {sidebar && (
        <div className="sidebar_out" onClick={() => setSidebar(false)}></div>
      )}
    </>
  );
}

export default memo(Sidebar);
