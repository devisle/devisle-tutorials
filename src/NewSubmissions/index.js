import React from "react";
import { Link } from "react-router-dom";
import ThemeChanger from "../ThemeChanger";
import styles from "./NewSubmissions.module.scss";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { ApplicationConsumer } from "../AppContext";
import { u1F31F } from "react-icons-kit/noto_emoji_regular/u1F31F";

const NewSubmissions = () => {
  return (
    <ApplicationConsumer>
      {({ darkMode }) => (
        <>
          <div
            className={
              darkMode ? `${styles.Menu} ${styles.DarkMode}` : `${styles.Menu}`
            }
          >
            <Link to="/" aria-label="Go back to the homepage">
              <Icon size={18} icon={arrowLeft} />
              <span>Go Back</span>
            </Link>
            <ThemeChanger />
          </div>
          <div
            className={
              darkMode
                ? `${styles.NewSubmissions} ${styles.DarkMode}`
                : `${styles.NewSubmissions}`
            }
          >
            <Icon icon={u1F31F} size={48} />
            <h1 className={styles.Submissions}>New Submissions</h1>
            <h2 className={styles.Submissions}>
              We are happy you are interested in adding a tutorial, it is
              simple!
            </h2>
            <h3 className={styles.Submissions}>
              You must submit to the github repo a markdown file, we chose this
              way because then everyone becomes a community contributor and
              learns to collaborate in this manner.
            </h3>
            <ol>
              <li>Write your tutorial in markdown format</li>
              <li>
                Join the Github organization, if you haven't already done so
              </li>
              <li>Ask to contribute to the Github repository</li>
              <li>
                Git clone the tutorial repository to your development machine
              </li>
              <li>Make a new git branch, then switch to it</li>
              <li>Add your markdown to the markdown folder and catalog</li>
              <li>
                Submit a pull request after you are happy with the commit!
              </li>
            </ol>
            <h4 className={styles.Submissions}>Feel free to ask on the discord for help :)</h4>
          </div>
        </>
      )}
    </ApplicationConsumer>
  );
};

export default NewSubmissions;
