import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { ApplicationConsumer } from "../AppContext";
import styles from "./Renderer.module.scss";
import ThemeChanger from "../ThemeChanger";

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
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
          this.setState({
            markdown: text,
          });
        });
    } catch {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <ApplicationConsumer>
        {({ darkMode }) => (
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
              <span>Discord Login Coming Soon</span>
            </section>
          </div>
        )}
      </ApplicationConsumer>
    );
  }
}

export default withRouter(Renderer);
