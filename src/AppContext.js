import React from "react";

export const ApplicationContext = React.createContext({
  darkMode: false,
  username: "",
  authenticated: false,
  loginMessage: "",
  updateContext: () => {},
});

export const ApplicationProvider = ApplicationContext.Provider;
export const ApplicationConsumer = ApplicationContext.Consumer;
