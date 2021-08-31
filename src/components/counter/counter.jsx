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

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>
        <Button
          onClick={this.handleIncrement}
          variant={this.getButtonVariant()}
          size="sm"
        >
          Add Tag
        </Button>
      </React.Fragment>
    );
  }

  getButtonVariant() {
    return this.state.count === 0 ? "warning" : "primary";
  }
}
