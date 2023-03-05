import React, { useState, useEffect } from "react";
import "./ReadAdmins.css";
import { READ_ADMINS } from "../../utils/manageAdmins";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import axios from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReadAdmins() {
  const [backAdminsData, setBackAdminsData] = useState([]);

  useEffect(() => {
    axios
      .get("/admin")
      .then((res) => {
        setBackAdminsData(res.data?.innerData);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(backAdminsData);
  const deleteAdmin = (adminId) => {
    axios
      .delete(`admin/${adminId}`)
      .then((res) => {
        toast("Admin o'chirildi");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="readadmins_container">
      <h2 className="readadmins_container_title">Adminlar ro'yxati</h2>
      <div className="readadmins_gridcont">
        {backAdminsData.map((item) => (
          <div key={item?._id} className="admins_card">
            <div className="admin_imgcont">
              {item?.fname.slice(0, 1).toLocaleUpperCase()}
            </div>
            <p className="admins_name">
              {item?.fname} {item?.lname}
            </p>
            <ul className="admins_collection">
              <li className="admins_item">
                Yoshi: <span>{item?.age} yosh</span>
              </li>
              <li className="admins_item">
                Jinsi: <span>{item?.gender === "male" ? "Erkak" : "Ayol"}</span>
              </li>
              <li className="admins_item">
                Telefon: <span>+{item.phoneNum}</span>
              </li>
              <li className="admins_item">
                Username: <span>{item?.username}</span>
              </li>
              <li className="admins_item">
                Password: <span>{item?.password}</span>
              </li>
            </ul>
            <FaTrashAlt
              onClick={() => deleteAdmin(item?._id)}
              className="admins_delete"
            />
            <FaUserEdit className="admins_edit" />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ReadAdmins;
