import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:5000/"
    // baseURL:"http://localhost:10.0.2.2/route1"
    // baseURL:"https://jsonplaceholder.typicode.com/posts"
})
export default API;