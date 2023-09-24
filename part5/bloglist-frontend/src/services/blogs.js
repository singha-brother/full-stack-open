import axios from "axios";
const baseUrl = "http://localhost:3000/api/blogs";
let token = null;

const setToken = (tok) => {
  token = `Bearer ${tok}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data.data);
};

export default { getAll, setToken };
