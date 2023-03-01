import axios from "axios";

const minURL = axios.create({
  baseURL: "https://olma-uz.onrender.com",
});

export default minURL;
