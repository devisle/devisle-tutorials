import React, { useEffect, useContext } from "react";
import { Icon } from "react-icons-kit";
import { chart_1_2 } from 'react-icons-kit/ikons/chart_1_2'
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
          <Icon icon={chart_1_2} size={22} onClick={handleChange} style={{cursor:'pointer'}} />
        </div>
      )}
    </ApplicationConsumer>
  );
};

export default ThemeChanger;
