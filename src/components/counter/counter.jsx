import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";
export default class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no Tags!</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    const classes = "m-2";
    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>
        <Badge bg={this.handleVariant()} className={classes}>
          {this.formatValue()}
        </Badge>
        <Button
          onClick={(product) => this.handleIncrement(product)}
          variant={this.handleVariant()}
          size="sm"
          className={classes}
        >
          Increment
        </Button>
        <Button
          onClick={this.props.onDelete}
          variant="danger"
          size="sm"
          className={classes}
        >
          Delete
        </Button>
      </React.Fragment>
    );
  }

  formatValue() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  handleVariant() {
    return this.state.value === 0 ? "warning" : "primary";
  }
}
