import axios from "axios";

const minURL = axios.create({
  // baseURL: "https://olma-uz.onrender.com",
  baseURL: "http://localhost:5000",
});
console.log(minURL);

export default minURL;
