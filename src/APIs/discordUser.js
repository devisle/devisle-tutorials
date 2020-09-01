import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const discordUser = async (token) => {
  return await axios
    .post(`${BASE_URL}discord/user`, {
      token,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export default discordUser;
