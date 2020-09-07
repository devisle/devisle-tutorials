import React, { useState } from "react";
import { Catalog } from "../Markdowns/Catalog";
import { withRouter, Link } from "react-router-dom";
import ThemeMode from "../ThemeChanger";
import withAuth from "../withAuth";
import { ApplicationConsumer } from "../AppContext";
import styles from "./Search.module.scss";
import GithubCorner from "react-github-corner";

const DISCORD_URL = process.env.REACT_APP_DISCORD;

const Search = (props) => {
  const [search, setSearch] = useState("");

  return (
    <ApplicationConsumer>
      {({ darkMode, username, authenticated, loginMessage }) => (
        <div className={styles.Container}>
          <section
            className={
              darkMode
                ? `${styles.Search} ${styles.DarkMode}`
                : `${styles.Search}`
            }
          >
            <div className={styles.Menu}>
              <div className={styles.MenuLeft}>
                <a
                  href="https://discord.gg/Mr9qMSJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
                <Link to="/new">
                  <span>New Submissions</span>
                </Link>
                <Link to="/editor">
                  <span>Preview Editor</span>
                </Link>
              </div>
              <div className={styles.MenuRight}>
                <ThemeMode />
                {authenticated ? (
                  <span>Logged in as {username}</span>
                ) : (
                  <a href={DISCORD_URL}>
                    <span>{loginMessage}</span>
                  </a>
                )}
                <GithubCorner
                  className={styles.GitBanner}
                  octoColor={darkMode ? "#151513" : "#fff"}
                  bannerColor={darkMode ? "#fff" : "#151513"}
                  size={120}
                  href="https://github.com/devisle/devisle-tutorials"
                />
              </div>
            </div>
            <h2>Dev Isle Tutorials</h2>
            <h3>Simple, quick and honest guides.</h3>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for a guide... "
            />
          </section>
          <section className={styles.SearchList}>
            {Catalog &&
              Object.keys(Catalog).map((key, index) => {
                return (
                  <div key={index}>
                    <div
                      className={
                        darkMode
                          ? `${styles.Category} ${styles.CategoryDark}`
                          : `${styles.Category}`
                      }
                    >
                      {`// ` + key}
                    </div>
                    {Catalog[key]
                      .filter((item) =>
                        item.title.toLowerCase().includes(search.toLowerCase())
                      )
                      .map(
                        (
                          { title, description, category, fileName, author },
                          index
                        ) => (
                          <div
                            key={index}
                            className={
                              darkMode
                                ? `${styles.SearchResult} ${styles.SearchResultDark}`
                                : `${styles.SearchResult}`
                            }
                            onClick={() =>
                              props.history.push({
                                pathname: `/tutorial/${fileName}`,
                              })
                            }
                          >
                            <h4>{title}</h4>
                            <p>{description}</p>
                            <span>Category: {category}</span>
                            {author && <p>Author: {author}</p>}
                          </div>
                        )
                      )}
                  </div>
                );
              })}
          </section>
        </div>
      )}
    </ApplicationConsumer>
  );
};

export default withAuth(withRouter(Search));
