import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { BiUser } from "react-icons/bi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { IoIosStats } from "react-icons/io";
import { BsWallet2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className={`container_Sidebar ${openSidebar ? "Open_Sidebar" : ""}`}>
      <button onClick={() => setOpenSidebar(!openSidebar)}>ok</button>
      <ul className="Side_ul">
        <li>
          <span>
            <BiUser />
          </span>

          <p className={`SideText ${openSidebar ? "" : "SideText_Close"}`}>
            All users
          </p>
        </li>
        <li>
          <span>
            <VscGitPullRequestCreate />
          </span>

          <p className={`SideText ${openSidebar ? "" : "SideText_Close"}`}>
            Create products
          </p>
        </li>
        <li>
          <span>
            <IoIosStats />
          </span>

          <p className={`SideText ${openSidebar ? "" : "SideText_Close"}`}>
            Statistika
          </p>
        </li>
        <li>
          <span>
            <BsWallet2 />
          </span>

          <Link to="/create pro" className={`SideText ${openSidebar ? "" : "SideText_Close"}`}>
            All products
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;
