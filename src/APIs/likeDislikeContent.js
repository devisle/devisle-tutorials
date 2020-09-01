import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const likeDislikeContent = async (fileName) => {
  return await axios
    .post(
      `${BASE_URL}content/vote`,
      { fileName },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};

export default likeDislikeContent;
