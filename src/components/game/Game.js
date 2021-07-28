import React from "react";
import ReactDOM from "react-dom";
import classes from './Game.module.css';

class Squared extends React.Component {
  render() {
    return (
      <button className={classes.square} onClick={() => this.props.onClicky()}>
        {this.props.valuee}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClicky(i) {
    const squares = this.state.squares.slice();
    console.log(squares);
    squares[i] = "X";
    this.setState({ squares: squares });
  }
  renderSquare(i) {
    return (
      <Squared
        valuee={this.state.squares[i]}
        onClicky={() => this.handleClicky(i)}
      />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className={classes.status}>{status}</div>
        <div className={classes.boardrow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={classes.boardrow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={classes.boardrow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className={classes.game}>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

function GameBoard() {
  return (
    <Game />
  );
}

export default GameBoard;