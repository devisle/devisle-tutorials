// 1. User clicks a link, menu login with discord
// 2. User is redirected to Discord where they click on an “Authorize” button
// 3. User is redirected back to our service with code in the URL
// 4. Our service makes an authorized request to Discord to exchange code for tokens
// 5. We respond with the token and set as local storage to make further requests

import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const discordLogin = async (code) => {
  return await axios
    .post(`${BASE_URL}discord/login`, {
      code,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export default discordLogin;
