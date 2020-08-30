import React from "react";
import styles from "./NoMatch.module.scss";
import { Icon } from "react-icons-kit";
import ThemeChanger from "../ThemeChanger";
import { ApplicationConsumer } from "../AppContext";
import { u1F30B } from "react-icons-kit/noto_emoji_regular/u1F30B";

const NoMatch = () => {
  return (
    <ApplicationConsumer>
      {({ darkMode }) => (
        <div
          className={
            darkMode
              ? `${styles.NoMatch} ${styles.DarkMode}`
              : `${styles.NoMatch}`
          }
        >
          <Icon icon={u1F30B} size={48} />
          <h2>The Page you are looking for does not exist</h2>
          <h4>If you are interested to add a tutorial, it is simple:</h4>
          <ol>
            <li>Write your tutorial in markdown format</li>
            <li>Join the Github organization</li>
            <li>Git clone the tutorial repository</li>
            <li>Make a new git branch</li>
            <li>Add your markdown to the markdown folder and catalog</li>
            <li>Submit a pull request after you are happy with the commit!</li>
          </ol>
          <h5>Feel free to ask on the discord for help :)</h5>
          <ThemeChanger />
        </div>
      )}
    </ApplicationConsumer>
  );
};

export default NoMatch;
