import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import marked from "marked";

class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;

    try {
      const readmePath = require(`../Markdowns/${name}.md`);

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
    return <Markdown>{this.state.markdown}</Markdown>;
  }
}

export default withRouter(Renderer);
