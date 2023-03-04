import React, { useState } from 'react'
import "./CreateProducts.css"
import { useSelector } from 'react-redux'
import axios from '../../../api'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'

const initialState = {
  price: {
    realPrice: "",
    deliveryPrice: "",
    setPrice: "",
  },
  admin: {
    created: "",
    updated: ""
  },
  delivery: {},
  desc: [],
  color: [],
  size: [],
  title: "",
  text: "",
  category: "",
  subcategory: "",
  year: "",
  model: "",
  views: 0,
  star: 0,
  date: new Date().getTime(),
}

function CreateProducts() {
  const [data, setData] = useState(initialState)
  const [desc, setDesc] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [urls, setUrls] = useState([])
  const createdAdmin_id = useSelector(s => s.auth)._id   //  create admin _id

  const handleChange = (e) => {
    const name = e.target.name
    if (name.includes("Price")) {
      return setData({ ...data, price: { ...data.price, [name]: +e.target.value } })
    }
    setData({ ...data, [name]: e.target.value })
  }

  const addExtraData = (type, value, set) => {
    setData({ ...data, [type]: [...data[type], value] })
    set("")
  }

  const createProduct = (e) => {
    e.preventDefault()
    data.admin.created = createdAdmin_id
    let formData = new FormData();
    // image yuklash
    Array.from(urls).forEach((i) => {
      formData.append("urls", i, i.name);
    });

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, JSON.stringify(value));
    });
    // formData.append('title', data.title)
    // formData.append('price', JSON.stringify(data.price))
    // formData.append('admin', data.admin)
    // formData.append('delivery', data.delivery)
    // formData.append('desc', data.desc)
    // formData.append('color', color)
    // formData.append('size', size)
    // formData.append('text', data.text)
    // formData.append('category', data.category)
    // formData.append('subcategory', data.subcategory)
    // formData.append('year', data.year)
    // formData.append('model', data.model)
    // formData.append('views', data.views)
    // formData.append('star', data.star)
    // formData.append('date', data.date)
    console.log(data);

    axios.post('/product', formData)
      .then(res => { console.log("ress>> ", res) })
      .catch(res => {
        console.log("err>>>", res);
      })
  }

  return (
    <div className='createProducts'>
      <h2>Create Products</h2>
      <form onSubmit={createProduct}>
        <div className='create__product-item'>
          <label htmlFor="">Nomi *</label>
          <input title='Mahsulot nomi' value={data.title} onChange={handleChange} type="text" placeholder='title' name="title" />
        </div>
        <div className='create__product-item'>
          <label htmlFor="">Mahsulot narxi *</label>
          <input value={data.price.realPrice} onChange={handleChange} type="number" placeholder='realPrice' name="realPrice" />
        </div>
        <div className='create__product-item'>
          <label htmlFor="">Yetkazib berish narxi</label>
          <input value={data.price.deliveryPrice} onChange={handleChange} type="number" placeholder='deliveryPrice' name="deliveryPrice" />
        </div>
        <div className='create__product-item'>
          <label htmlFor="">O'rnatib berish narxi</label>
          <input value={data.price.setPrice} onChange={handleChange} type="number" placeholder='setPrice' name="setPrice" />
        </div>
        <div className='create__product-item'>
          <label htmlFor="">Mahsulot tarifi</label>
          <div>
            <input onBlur={() => addExtraData("desc", desc, setDesc)} value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder='desc' name="desc" />
            <button onClick={() => addExtraData("desc", desc, setDesc)} type='button'>Qo'shish</button>
          </div>
        </div>
        <div className='create__product-item'>
          <label htmlFor="">Mahsulot rangi</label>
          <div>
            <input onBlur={() => addExtraData("color", color, setColor)} value={color} onChange={e => setColor(e.target.value)} type="text" placeholder='color' name="color" />
            <button onClick={() => addExtraData("color", color, setColor)} type='button'>Qo'shish</button>
          </div>

        </div>
        <div className='create__product-item'>
          <label htmlFor="">Mahsulot o'lchami *</label>
          <div>
            <input onBlur={() => addExtraData("size", size, setSize)} value={size} onChange={e => setSize(e.target.value)} type="text" placeholder='size' name="size" />
            <button onClick={() => addExtraData("size", size, setSize)} type='button'>Qo'shish</button>
          </div>
        </div>
        <div className="create__product-item">
          <label htmlFor="">Mahsulot turi *</label>
          <select onChange={(e) => setData({ ...data, category: e.target.value })}>
            <option value="dush">Dush</option>
            <option value="vanna">Vanna</option>
            <option value="dush">Dush</option>
            <option value="vanna">Vanna</option>
          </select>
        </div>
        <div className="create__product-item">
          <label htmlFor="">Mahsulot turi (subcategory) *</label>
          <select onChange={(e) => setData({ ...data, subcategory: e.target.value })}>
            <option value="dush">Dush</option>
            <option value="vanna">Vanna</option>
            <option value="dush">Dush</option>
            <option value="vanna">Vanna</option>
          </select>
        </div>
        <div className="create__product-item">
          <label htmlFor="">Text</label>
          <input type="text" onChange={handleChange} name="text" placeholder='text' />
        </div>
        <div className="create__product-item">
          <label htmlFor="">Model</label>
          <input type="text" onChange={handleChange} name="model" placeholder='model' />
        </div>
        <div className="create__product-item">
          <label htmlFor="">Yili</label>
          <input type="date" onChange={handleChange} name="year" />
        </div>
        <div className="create__product-item">
          <label htmlFor="">Star</label>
          <input type="number" onChange={handleChange} name="star" />
        </div>

        <div className="create__product-item">
          <label htmlFor="file"><MdOutlineAddPhotoAlternate /></label>
          <input type="file" id='file' accept="image/*" multiple onChange={e => setUrls(e.target.files)} />
        </div>

        <button className='CretateBtn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateProducts