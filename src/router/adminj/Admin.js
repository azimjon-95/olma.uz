import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./admin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loading/App";
import {} from "number-brm";
import axios from "../../api";
import { IoIosStats } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";
import UpdateProduct from "../../components/updateProduct/UpdateProduct";
import TableUsers from "../../components/users/Users";

const Admins = () => {
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);
  const [deletPro, setDeletPro] = useState(false);
;
  // ____________read_product_and_pagination___________________
  const [base, setBase] = useState([]);
  const pageNumbers = [];
  const reload = useSelector((s) => s.reload);
  const cart = useSelector((s) => s.reduxCart);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => {
        setBase(res.data.data || []);
      })
      .catch((err) => console.log("err>>", err))
      .finally(() => {
        setLoading(false);
      });
  }, [reload]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = base.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(base.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // ___________________create_product_________________________
  const createProduct = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("item", item)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("url", url[0], url[0].name)

    // let newPro = { item, url, price: +price, category };
    // console.log(newPro);

    axios
      .post("/products", formData)
      .then((res) => {
        console.log(res);
        if (!res?.data?.state) {
          return toast(res?.data?.msg);
        }
        setItem("");
        setUrl("");
        setPrice("");
        toast("Malumot qo'shildi");
        dispatch({ type: "RELOAD" });
      })
      .catch((err) => console.log(err));
  };

  //_____________Delete products_____________________
  const postDelete = (_id) => {
    axios.delete(`/products/${_id}`).then((res) => {
      console.log(res);
      dispatch({ type: "RELOAD" });
      toast("Malumot o'chirildi");
    });
  };

  // ___________________update_product_________________________
  const [updateShow, setUpdateShow] = useState(false);
  const [total, setTotal] = useState(null);

  // ____________________________________________

  // const logOur = ()=>{
  //   dispatch({type: LOG_OUT})
  //   localStorage.removeItem("token")
  // }
  return (
    <div className="Container_Admin">
      <h1>Admin panel</h1>
      <div className="Top_Admin">
        <form action="" onSubmit={createProduct} className="Left_Admin">
          <h2>Create Products</h2>
          <input
            type="text"
            placeholder="Name..."
            required
            className="Sel_Box"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price..."
            required
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="Sel_Price"
          />

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="Sel_Box"
          >
            <option value="">Category</option>
            <option value="phone">phone</option>
            <option value="tv">tv</option>
            <option value="laptop">laptop</option>
          </select>
          <span className="Sel_Col">
            <input
              type="file"
              placeholder="Image..."
              required
              // value={url}
              onChange={(e) => setUrl(e.target.files)}
            />

          </span>
          <button>Submit</button>
        </form>
        <div className="Main_Admin"></div>
        <div className="Right_Admin">
          <TableUsers />
        </div>
      </div>

      <div className="product_container_Admin">
        {currentPosts?.map((value, inx) => (
          <div key={inx} className="product_item_Admin">
            <span className="pro_heart_Admin">
              <AiOutlineHeart />
            </span>
            <span className="pro_stats_Admin">
              <IoIosStats />
            </span>
            <img className="pro_img" src={value.img} alt="" />
            <p className="pro_title_Admin">{value?.item}</p>
            <del className="del_price_Admin">{value?.del_price}</del>
            <p className="pro_price_Admin">{value.price.brm()} so'm</p>
            <p className="pro_month_Admin">
              {Math.floor((value?.price / 10) * 1.1).brm()}
            </p>

            <div className="pro_box_Admin">
              <button
                onClick={() => setDeletPro(true)}
                className="pro_money_Admin"
              >
                <RiDeleteBin5Line /> Delete
              </button>

              <button
                onClick={() => {
                  setUpdateShow(true);
                  setTotal(value);
                }}
                className="pro_addCart_Admin"
              >
                <RxUpdate />
                Edit
              </button>

              {deletPro && (
                <div
                  className="delete__shadow"
                  onClick={() => setDeletPro(false)}
                ></div>
              )}
              <div className={`DeletePro ${deletPro ? "DelShow" : ""}`}>
                <p>You are really sure. Delete, {value?.item}?</p>
                <span>
                  <button onClick={() => postDelete(value._id)}>Yes</button>

                  <button onClick={() => setDeletPro(false)}>No</button>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="Pagination">
          {pageNumbers.map((value) => {
            return (
              <button onClick={() => paginate(value)} key={value}>
                {value}
              </button>
            );
          })}
        </div>
      </div>

      {loading && <Loader />}
      <ToastContainer />
      <UpdateProduct total={total} show={updateShow} setShow={setUpdateShow} />
    </div>
  );
};

export default Admins;
