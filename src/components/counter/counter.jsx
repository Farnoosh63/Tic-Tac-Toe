import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";
export default class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no Tags!</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  render() {
    return (
      <React.Fragment>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
}
