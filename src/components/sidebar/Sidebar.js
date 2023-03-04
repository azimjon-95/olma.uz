import React, { useState, memo } from "react";
import "./Sidebar.css";
import { AiOutlineBars, AiFillHome } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { HiChartPie, HiUsers, HiOutlineUserCircle } from "react-icons/hi";
import { BiDoorOpen } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import {ADMINS_ROUTER} from "../../static/adminRouter"

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className={`big__sidebar ${sidebar ? "sidebar_show" : ""}`}>
        {sidebar ? (
          <div className="bigSidebar__box">
            <HiOutlineUserCircle onClick={() => setSidebar(true)} />
            <h3 className={`categories_title ${sidebar ? "" : "title_show"}`}>
              Musaffo
            </h3>
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
        <Link to="/admin" className="bigSidebar__categories">
          <span>
            <AiFillHome />
          </span>
          <h3 className={`categories_title ${sidebar ? "" : "title_show"}`}>
            Asosiy sahifa
          </h3>
        </Link>
        {
          ADMINS_ROUTER?.map(({icon,path,title}, inx)=> <Link key={inx} to={path.slice(1)} className="bigSidebar__categories">
          <span>
            {icon}
          </span>
          <h3 className={`categories_title ${sidebar ? "" : "title_show"}`}>
            {title}
          </h3>
        </Link>)
        }
        <div className="bigSidebar__categories">
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

