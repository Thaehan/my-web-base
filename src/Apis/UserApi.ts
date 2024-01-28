import axios from "axios";

import { API_URL } from "Constants/Configs";
import { TLoginForm, TUserState } from "Types";

const USER_API = `${API_URL}`;

const login = async (data: TLoginForm) => {
  // const response = await axios.post(USER_API, data);
  // return response.data;
  const response: TUserState = {
    username: "Thaehan",
    token: "123456",
  };

  return {
    message: "Error",
    data: response,
  };
};

export default {
  login,
};
