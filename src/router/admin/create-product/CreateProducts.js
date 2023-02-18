import React, {useState} from 'react'
import "./CreateProducts.css"

const initialState = {
    price:{
        realPrice: "",
        deliveryPrice: "",
        setPrice: "",
    },
    admin:{
      created: "",
      updated: ""
    },
    delivery: {},
    desc: [],
    color: [], 
    size:  [],
    title: "",
    text:"",
    category:"",
    subcategory:"", 
    year:"",
    model:"",
    views:0,
    star: 0,
    date:new Date().getTime(),
}

function CreateProducts() {
  const [data, setData] = useState(initialState)
  const [desc, setDesc] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")

  const handleChange = (e)=>{
    const name = e.target.name
    if(name.includes("Price")){
      return setData({...data, price: {...data.price, [name]: +e.target.value} })
    }
    setData({...data, [name]: e.target.value })
  }

  const addExtraData = (type, value, set)=>{
    setData({...data, [type]: [...data[type], value ]})
    set("")
  }

  console.log(data)

  return (
    <div>
      <h2>Create Products</h2>
      <form action="">
        <div className='create__product-item'>
          <label htmlFor="">Nomi</label>
          <input value={data.title} onChange={handleChange} type="text" placeholder='title' name="title" />
        </div>
        <div className='create__product-item'>
          <label htmlFor="">Mahsulot narxi</label>
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
          <input onBlur={()=> addExtraData("desc", desc, setDesc)} value={desc} onChange={e=>setDesc(e.target.value)} type="text" placeholder='desc' name="desc" />
          <button  onClick={()=> addExtraData("desc", desc, setDesc)} type='button'>Qo'shish</button>
        </div>
        <div className='create__product-item'>
          <label htmlFor="">Mahsulot rangi</label>
          <input onBlur={()=> addExtraData("color", color, setColor)} value={color} onChange={e=>setColor(e.target.value)} type="text" placeholder='color' name="color" />
          <button  onClick={()=> addExtraData("color", color, setColor)} type='button'>Qo'shish</button>
        </div>
        <div className='create__product-item'>
          <label htmlFor="">Mahsulot o'lchami</label>
          <input onBlur={()=> addExtraData("size", size, setSize)} value={size} onChange={e=>setSize(e.target.value)} type="text" placeholder='size' name="size" />
          <button  onClick={()=> addExtraData("size", size, setSize)} type='button'>Qo'shish</button>
        </div>
        
      </form>
    </div>
  )
}

export default CreateProducts