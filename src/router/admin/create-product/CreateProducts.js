import React, { useState } from "react";
import "./CreateProducts.css";
import { useSelector } from "react-redux";
import axios from "../../../api";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

function CreateProducts() {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");
  const [urls, setUrls] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const createdAdmin_id = useSelector((s) => s.auth)._id; //  create admin _id

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   // if (name.includes("Price")) {
  //   //   return setData({
  //   //     ...data,
  //   //     price: { ...data.price, [name]: +e.target.value },
  //   //   });
  //   // }
  //   // setData({ ...data, [name]: e.target.value });
  // };

  const addExtraData = (type, value, set) => {
    // setData({ ...data, [type]: [...data[type], value] });
    set("");
  };

  const createProduct = (e) => {
    e.preventDefault();
    let formData = new FormData();

    // image yuklash
    Array.from(urls).forEach((i) => {
      formData.append("images", i, i.name);
    });

    // Object.entries(data).forEach(([key, value]) => {
    //   formData.append(key, JSON.stringify(value));
    // });

    formData.append("item", item);
    formData.append("price", +price);
    formData.append("color", color);
    formData.append("category", category);
    formData.append("desc", desc);
    formData.append("text", text);
    formData.append("date", new Date());

    axios
      .post("/products", formData)
      .then((res) => {
        console.log(" ress>>", res);
        // if (res.data.state) {
        //   toast.success(res.data.msg, {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 1500,
        //   });
        // } else {
        //   toast.error(res.data.msg, {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 1500,
        //   });
        // }
      })
      .catch((res) => {
        console.log("err>> ", res);
      });
  };
  console.log(createProduct);
  return (
    <div className="createProducts">
      <h2>Create Products</h2>
      <form onSubmit={createProduct}>
        <div className="create__product-item">
          <label htmlFor="">Nomi *</label>
          <input
            title="Mahsulot nomi"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="item"
            placeholder="item"
            name="item"
          />
        </div>
        <div className="create__product-item">
          <label htmlFor="">Mahsulot narxi *</label>
          <input
            value={price.realPrice}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="realPrice"
            name="realPrice"
          />
        </div>

        <div className="create__product-item">
          <label htmlFor="">Mahsulot tarifi</label>
          <div>
            <input
              onBlur={() => addExtraData("desc", desc, setDesc)}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="desc"
              name="desc"
            />
            <button
              onClick={() => addExtraData("desc", desc, setDesc)}
              type="button"
            >
              Qo'shish
            </button>
          </div>
        </div>
        <div className="create__product-item">
          <label htmlFor="">Mahsulot rangi</label>
          <div>
            <input
              onBlur={() => addExtraData("color", color, setColor)}
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              placeholder="color"
              name="color"
            />
            <button
              onClick={() => addExtraData("color", color, setColor)}
              type="button"
            >
              Qo'shish
            </button>
          </div>
        </div>

        <div className="create__product-item">
          <label htmlFor="">Mahsulot turi *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Televizor foto, video va audio">
              Televizor foto, video va audio
            </option>
            <option value="Noutbook, printer va kompyuter">
              Noutbook, printer va kompyuter
            </option>
            <option value="Smartfon, telefon, gadjet, aksesuarlar">
              Smartfon, telefon, gadjet, aksesuarlar
            </option>
            <option value="Maishiy texnika">Maishiy texnika</option>
            <option value="Oshxona anjomlari">Oshxona anjomlari</option>
            <option value="Sport anjomlari">Sport anjomlari</option>
            <option value="Go'zallik va salomatlik">
              Go'zallik va salomatlik
            </option>
            <option value="Avtomonil jihozlari">Avtomonil jihozlari</option>
            <option value="Barchasi ofis, uy va bog' uchun">
              Barchasi ofis, uy va bog' uchun
            </option>
            <option value="Bolalar uchun">Bolalar uchun</option>
            <option value="Kiyim va poyabzallar">Kiyim va poyabzallar</option>
            <option value="Kitoblar">Kitoblar</option>
            <option value="Mebel jihozlari">Mebel jihozlari</option>
            <option value="Geymerlar uchun">Geymerlar uchun</option>
            <option value="Ta'mirlash va qurilish mollari">
              Ta'mirlash va qurilish mollari
            </option>
            <option value="Konselariya tovarlari">Konselariya tovarlari</option>
            <option value="Elektrotransport">Elektrotransport</option>
            <option value="Sovg'alar va suvinerlar">
              Sovg'alar va suvinerlar
            </option>
            <option value="Aqlli uy">Aqlli uy</option>
            <option value="Qulay takliflar">Qulay takliflar</option>
          </select>
        </div>

        <div className="create__product-item">
          <label htmlFor="">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="text"
            placeholder="text"
          />
        </div>
        <div className="create__product-item">
          <label htmlFor="file">
            <MdOutlineAddPhotoAlternate />
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            multiple
            onChange={(e) => setUrls(e.target.files)}
          />
        </div>

        <button className="CretateBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateProducts;
