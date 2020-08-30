import React, { useEffect, useContext } from "react";
import { ApplicationConsumer, ApplicationContext } from "../AppContext";

const ThemeChanger = () => {
  const context = useContext(ApplicationContext);

  const handleChange = () => {
    context.updateContext("darkMode", !context.darkMode);
  };

  useEffect(() => {
    if (context.darkMode) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark-mode");
    }
  }, [context]);

  return (
    <ApplicationConsumer>
      {({ darkMode }) => (
        <div>
          <button onClick={handleChange}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </ApplicationConsumer>
  );
};

export default ThemeChanger;
