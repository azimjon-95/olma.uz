import axios from 'axios';

const minURL = axios.create({
    baseURL: "http://localhost:5000"
})

export default minURL;