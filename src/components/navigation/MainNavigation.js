import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Learning Circle</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/game">
              Game
            </Link>
          </li>
          <li>
            <Link to="/pair-programming">
              Pair Programming
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
