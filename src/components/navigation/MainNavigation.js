import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Learning Circle</div>
      <nav>
        <ul>
          <li>
            <Link to="/Tic-Tac-Toe">Home</Link>
          </li>
          <li>
            <Link to="/Tic-Tac-Toe/game">Game</Link>
          </li>
          <li>
            <Link to="/Tic-Tac-Toe/pair-programming">Pair Programming</Link>
          </li>
          <li>
            <Link to="/Tic-Tac-Toe/counters">Counters</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
