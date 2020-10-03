import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { ic_keyboard_arrow_left } from "react-icons-kit/md/ic_keyboard_arrow_left";
import { ApplicationConsumer } from "../AppContext";
import { starO } from "react-icons-kit/fa/starO";
import likeDislikeContent from "../APIs/likeDislikeContent";
import contentViews from "../APIs/contentViews";
import withAuth from "../withAuth";
import styles from "./Renderer.module.scss";
import ThemeChanger from "../ThemeChanger";
import { Catalog } from "../Markdowns/Catalog";

const DISCORD_URL = process.env.REACT_APP_DISCORD;

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
      likes: 0,
      views: 0,
      author: "",
      category: "",
      nextTutorial: "",
      previousTutorial: "",
    };
  }

  retrieveCatalogDetails = (fileName) => {
    Object.keys(Catalog).forEach((key) => {
      Catalog[key].forEach((tutorial, index) => {
        if (tutorial.fileName === fileName) {
          this.setState({
            author: tutorial.author,
            category: tutorial.category,
            nextTutorial: Catalog[key][index + 1]
              ? Catalog[key][index + 1].fileName
              : "",
            previousTutorial: Catalog[key][index - 1]
              ? Catalog[key][index - 1].fileName
              : "",
          });
        }
      });
    });
  };

  retrieveMarkdown = (fileName) => {
    try {
      const readmePath = require(`../Markdowns/${fileName}.md`);

      fetch(readmePath)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          this.setState({
            markdown: text,
          });

          contentViews(fileName).then((result) => {
            if (result.data && result.status === 200) {
              this.setState({
                likes: result.data.totalLikes,
                views: result.data.totalViews,
              });
            }
          });
        });
    } catch {
      this.props.history.push("/");
    }
  };

  componentDidMount() {
    const { fileName } = this.props.match.params;
    this.retrieveCatalogDetails(fileName);
    this.retrieveMarkdown(fileName);
  }

  componentDidUpdate(prevProps) {
    const { fileName } = this.props.match.params;
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.retrieveCatalogDetails(fileName);
      this.retrieveMarkdown(fileName);
    }
  }

  likeOrDislike = () => {
    const { fileName } = this.props.match.params;
    likeDislikeContent(fileName).then((result) => {
      if (result.data && result.status === 200) {
        this.setState({
          likes: result.data.totalLikes,
          views: result.data.totalViews,
        });
      }
    });
  };

  render() {
    return (
      <ApplicationConsumer>
        {({ darkMode, authenticated, username, loginMessage }) => (
          <div className={styles.Container}>
            <section
              className={
                darkMode
                  ? `${styles.Return} ${styles.DarkMode}`
                  : `${styles.Return}`
              }
            >
              <Link to="/" aria-label="Go back to the homepage">
                <Icon size={18} icon={arrowLeft} />
                <span>Go Back</span>
              </Link>
              <ThemeChanger />
            </section>
            <section
              className={
                darkMode
                  ? `${styles.Renderer} ${styles.DarkModeRenderer}`
                  : `${styles.Renderer}`
              }
            >
              <div className={styles.Stats}>
                <div className={styles.StatsLeft}>
                  <p>{this.state.author}</p>
                  <p>{this.state.category}</p>
                </div>
                <div className={styles.StatsRight}>
                  {authenticated && (
                    <p
                      className={styles.StatsVote}
                      onClick={() => this.likeOrDislike()}
                    >
                      <Icon icon={starO} size={24} />
                    </p>
                  )}
                  <p className={styles.StatsLikes}>
                    Likes: {this.state.likes}
                  </p>
                  <p className={styles.StatsViews}>
                    Views: {this.state.views}
                  </p>
                </div>
              </div>
              <Markdown
                options={{
                  namedCodesToUnicode: {
                    le: "\u2264",
                    ge: "\u2265",
                  },
                }}
              >
                {this.state.markdown}
              </Markdown>
              <div
                className={
                  darkMode
                    ? `${styles.TutorialLinks} ${styles.DarkMode}`
                    : `${styles.TutorialLinks}`
                }
              >
                {this.state.previousTutorial && (
                  <Link to={`/tutorial/${this.state.previousTutorial}`} aria-label="Get to the previous tutorial">
                    <Icon icon={ic_keyboard_arrow_left} />
                    <span>Previous Tutorial</span>
                  </Link>
                )}
                {this.state.nextTutorial && (
                  <Link to={`/tutorial/${this.state.nextTutorial}`} aria-label="Get to the next tutorial">
                    <span>Next Tutorial</span>
                    <Icon icon={ic_keyboard_arrow_right} />
                  </Link>
                )}
              </div>
            </section>
            <section
              className={
                darkMode ? `${styles.New} ${styles.DarkMode}` : `${styles.New}`
              }
            >
              {authenticated ? (
                <span>Logged in as {username}</span>
              ) : (
                <a href={DISCORD_URL} aria-label="Discord login">
                  <span>{loginMessage}</span>
                </a>
              )}
            </section>
          </div>
        )}
      </ApplicationConsumer>
    );
  }
}

export default withAuth(withRouter(Renderer));
