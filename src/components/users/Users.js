import React, { useEffect, useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import  "./users.css";
import { FaUserSlash } from "react-icons/fa";
import axios from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableUsers = () => {
  const [loading, setLoading] = useState(true);
  const reload = useSelector((s) => s.reload);
  const [base, setBase] = useState([]);
  const [deletPro, setDeletPro] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    axios
      .get("/user")
      .then((res) => {
        setBase(res.data.innerData || []);
      })
      .catch((err) => console.log("err>>", err))
      .finally(() => {
        setLoading(false);
      });
  }, [reload]);


    //_____________Delete products_____________________
    const userDelete = (_id) => {
      axios.delete(`/user/${_id}`).then((res) => {
        console.log(res);
        dispatch({ type: "RELOAD" });
        toast("Malumot o'chirildi");
      });
    };
  return (
    <div className='Container_user'>
      <table className='Content_table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>F name</th>
            <th>L name</th>
            <th>Agr</th>
            <th>Country</th>
            <th>Number</th>
            <th>Category</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {base.map((value, inx) => {
            return (
              <>
                <tr>
                  <td>{inx + 1}</td>
                  <td>{value?.fname}</td>
                  <td>{value?.lname}</td>
                  <td>{value?.age}</td>
                  <td>{value?.country}</td>
                  <td>{value?.phoneNum}</td>
                  <td className='checkbox'>
                    <span>
                      <p>User</p>
                      <input type="checkbox" name="" id="user" />
                    </span>
                    <span>
                      <p>Admin</p>
                      <input type="checkbox" name="" id="admin" />
                    </span>
                  </td>
                  <td onClick={()=>  setDeletPro(true)} className='Del_user'>
                    <FaUserSlash />
                  </td>
                </tr>

                {deletPro && (
                  <div
                    className="delete__shadow"
                    onClick={() => setDeletPro(false)}
                  ></div>
                )}
                <div className={`DeletePro ${deletPro ? "DelShow" : ""}`}>
                  <p>You are really sure. Delete, {value?.fname}?</p>
                  <span>
                    <button onClick={() => userDelete(value._id)}>Yes</button>

                    <button onClick={() => setDeletPro(false)}>No</button>
                  </span>
                </div>
              </>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default TableUsers;
