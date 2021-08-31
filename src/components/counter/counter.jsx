import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";
export default class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
  };

  render() {
    let classes = this.getBadgeClasses();
    const bgColor = this.state.count === 0 ? "warning" : "primary";

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <Badge bg={bgColor} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </Badge>
        <Button variant="primary" size="sm">
          Increment
        </Button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
