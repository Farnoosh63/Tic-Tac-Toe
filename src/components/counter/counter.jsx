import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";
export default class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no Tags!</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  handleReset = (item) => {
    this.setState({ value: 0 });
  };

  handleDelete = (counterValue) => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    console.log("counter: Rendered");

    // console.log("props", this.props);
    const classes = "m-2";
    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>
        <Button
          onClick={(item) => this.handleReset(item)}
          className={classes}
          variant="success"
          size="sm"
        >
          Reset
        </Button>
        <Button
          onClick={() => this.props.onCompleteDelete(this.props.counter.id)}
          className={classes}
          variant="secondary"
          size="sm"
        >
          Complete Delete
        </Button>
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
          onClick={(counterValue) => this.handleDelete(counterValue)}
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
