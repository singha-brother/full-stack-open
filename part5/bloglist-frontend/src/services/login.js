import axios from "axios";

const baseUrl = "http://localhost:3000/api/login";

const loginUser = async (username, password) => {
  const res = await axios.post(baseUrl, { username, password });
  return res.data;
};

export default { loginUser };
