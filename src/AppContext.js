import React from "react";

export const ApplicationContext = React.createContext({
  darkMode: false,
  updateContext: () => {},
});

export const ApplicationProvider = ApplicationContext.Provider;
export const ApplicationConsumer = ApplicationContext.Consumer;
