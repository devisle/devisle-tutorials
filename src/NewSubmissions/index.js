import React from "react";
import { Link } from "react-router-dom";
import styles from "./NewSubmissions.module.scss";
import { Icon } from "react-icons-kit";
import { u1F31F } from "react-icons-kit/noto_emoji_regular/u1F31F";

const NewSubmissions = () => {
  return (
    <div className={styles.NewSubmissions}>
      <Icon icon={u1F31F} size={48} />
      <h2>New Submissions</h2>
      <h4>
        We are happy you are interested in adding a tutorial, it is simple!
      </h4>
      <ol>
        <li>Write your tutorial in markdown format</li>
        <li>Join the Github organization, if you haven't already done so</li>
        <li>Ask to contribute to the Github repository</li>
        <li>Git clone the tutorial repository to your development machine</li>
        <li>Make a new git branch, then switch to it</li>
        <li>Add your markdown to the markdown folder and catalog</li>
        <li>Submit a pull request after you are happy with the commit!</li>
      </ol>
      <h5>Feel free to ask on the discord for help :)</h5>
      <Link to="/">
        <span>Go back</span>
      </Link>
    </div>
  );
};

export default NewSubmissions;
