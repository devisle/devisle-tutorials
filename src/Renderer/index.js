import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import marked from "marked";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/fa/plus";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import styles from "./Renderer.module.scss";

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    const { fileName } = this.props.match.params;

    try {
      const readmePath = require(`../Markdowns/${fileName}.md`);

      fetch(readmePath)
        .then(response => {
          return response.text();
        })
        .then(text => {
          this.setState({
            markdown: marked(text)
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
          <Icon size={21} icon={arrowLeft} />
          <span>Go Back</span>
        </section>
        <section className={styles.Renderer}>
          <Markdown>{this.state.markdown}</Markdown>
        </section>
        <section className={styles.New}>
          <Icon size={21} icon={plus} />
          <span>Create New</span>
        </section>
      </div>
    );
  }
}

export default withRouter(Renderer);
