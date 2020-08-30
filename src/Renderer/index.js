import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import styles from "./Renderer.module.scss";

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
      <div className={styles.Container}>
        <section className={styles.Return}>
          <Link to="/">
            <Icon size={18} icon={arrowLeft} />
            <span>Go Back</span>
          </Link>
        </section>
        <section className={styles.Renderer}>
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
        <section className={styles.New}>Discord Login Coming Soon</section>
      </div>
    );
  }
}

export default withRouter(Renderer);
