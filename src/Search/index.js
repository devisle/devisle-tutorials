import React, { useState, useEffect } from "react";
import { Catalog } from "../Markdowns/Catalog";
import { withRouter, Link } from "react-router-dom";
import ThemeMode from "../ThemeChanger";
import { ApplicationConsumer, ApplicationContext } from "../AppContext";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [search, setSearch] = useState("");

  return (
    <ApplicationConsumer>
      {({ darkMode }) => (
        <div className={styles.Container}>
          <section
            className={
              darkMode
                ? `${styles.Search} ${styles.DarkMode}`
                : `${styles.Search}`
            }
          >
            <ThemeMode />
            <h2>Dev Isle Coding Tutorials</h2>
            <h3>Simple, quick and honest guides.</h3>
            <a
              href="https://discord.gg/Mr9qMSJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the discord!
            </a>
            <Link to="/new">
              <span>How to submit a new tutorial!</span>
            </Link>
            <Link to="/editor">
              <span>Write a tutorial in the preview</span>
            </Link>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for a guide... "
            />
          </section>
          <section className={styles.SearchList}>
            {Catalog &&
              Catalog.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              ).map(({ title, description, category, fileName }, index) => (
                <div
                  key={index}
                  className={
                    darkMode
                      ? `${styles.SearchResult} ${styles.DarkMode}`
                      : `${styles.SearchResult}`
                  }
                  onClick={() => props.history.push(`/tutorial/${fileName}`)}
                >
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <span>Category: {category}</span>
                </div>
              ))}
          </section>
        </div>
      )}
    </ApplicationConsumer>
  );
};

export default withRouter(Search);
