import axios from "axios";


const appserve = axios.create({
  baseURL: 'http://localhost:3000/',
});
export default appserve;
