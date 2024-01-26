import axios from "axios";

import { API_URL } from "Constants/Configs";

const USER_API = `${API_URL}`;

const login = async (data: any) => {
  console.log("data", data);
  const result = await axios.post(USER_API, data);
  return result.data;
};

export default {
  login,
};
