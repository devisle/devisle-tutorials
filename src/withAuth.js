import React, { useEffect, useContext } from "react";
import { ApplicationContext } from "./AppContext";
import discordLogin from "./APIs/discordLogin";
import discordUser from "./APIs/discordUser";

const withAuth = (Component) => (props) => {
  const { updateContext } = useContext(ApplicationContext);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const code = query.get("code");
    const token = localStorage.getItem("token");

    if (code && !token) {
      discordLogin(code).then((result) => {
        if (result.status === 200 && result.data) {
          console.log("inside code login");
          console.log(result.data);
          localStorage.setItem("token", result.data.token);
          updateContext("username", result.data.username);
          updateContext("authenticated", true);
        }

        if (result.response && result.response.status === 400) {
          // console.log(result.response);
          // setLoginMessage("Could not login, try again later");
        }
      });
    }

    if ((!code && token) || (code && token)) {
      discordUser(token).then((result) => {
        // console.log(result);

        if (result.status === 200 && result.data) {
          // console.log("inside token user");
          // console.log(result.data);
          updateContext("username", result.data.username);
          updateContext("authenticated", true);
        }

        if (result.response && result.response.status === 400) {
          // console.log(result.response);
          // setLoginMessage("Login with Discord");
        }
      });
    }
  }, [updateContext, props.location.search]);

  return <Component />;
};

export default withAuth;
