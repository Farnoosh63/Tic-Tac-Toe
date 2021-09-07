import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleCompleteDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onCompleteDelete={(counterID) =>
              this.handleCompleteDelete(counterID)
            }
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
