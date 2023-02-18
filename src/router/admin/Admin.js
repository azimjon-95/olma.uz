import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";
import { ADMINS_ROUTER } from "../../utils/adminRouter";

function Admin() {
  return (
    <div className="admin">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainAdmin">
        <Routes>
          {ADMINS_ROUTER?.map(({ el, path }, inx) => (
            <Route key={inx} path={path} element={el} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
