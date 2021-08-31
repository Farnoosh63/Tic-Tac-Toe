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

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
    console.log(product);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>
        <Badge bg={this.handleVariant()}>{this.formatCount()}</Badge>
        <Button
          onClick={(product) => this.handleIncrement(product)}
          variant={this.handleVariant()}
          size="sm"
        >
          Add Tag
        </Button>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  handleVariant() {
    return this.state.count === 0 ? "warning" : "primary";
  }
}
