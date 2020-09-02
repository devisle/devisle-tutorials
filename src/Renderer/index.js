import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { ApplicationConsumer } from "../AppContext";
import { starO } from "react-icons-kit/fa/starO";
import likeDislikeContent from "../APIs/likeDislikeContent";
import contentViews from "../APIs/contentViews";
import withAuth from "../withAuth";
import styles from "./Renderer.module.scss";
import ThemeChanger from "../ThemeChanger";

const DISCORD_URL = process.env.REACT_APP_DISCORD;

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
      likes: 0,
      views: 0,
    };
  }

  componentDidMount() {
    const { fileName } = this.props.match.params;

    try {
      const readmePath = require(`../Markdowns/${fileName}.md`);

      fetch(readmePath)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          contentViews(fileName).then((result) => {
            if (result.data && result.status === 200) {
              this.setState({
                markdown: text,
                likes: result.data.totalLikes,
                views: result.data.totalViews,
              });
            } else {
              this.setState({
                markdown: text,
              });
            }
          });
        });
    } catch {
      this.props.history.push("/");
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
              <Link to="/">
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
                {authenticated && (
                  <div
                    className={styles.StatsVote}
                    onClick={() => this.likeOrDislike()}
                  >
                    <Icon icon={starO} size={24} />
                  </div>
                )}
                <div className={styles.StatsLikes}>
                  Likes: {this.state.likes}
                </div>
                <div className={styles.StatsViews}>
                  Views: {this.state.views}
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
            </section>
            <section
              className={
                darkMode ? `${styles.New} ${styles.DarkMode}` : `${styles.New}`
              }
            >
              {authenticated ? (
                <span>Logged in as {username}</span>
              ) : (
                <a href={DISCORD_URL}>
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
