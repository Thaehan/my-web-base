import axios from "axios";

import { API_URL } from "Constants/Configs";

const POST_API_URL = `${API_URL}`;

const getPost = async () => {
  const result = await axios.get(POST_API_URL);
  return result;
};

export default {
  getPost,
};
