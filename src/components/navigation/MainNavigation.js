import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Research and Tech Team meeting</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Game
            </Link>
          </li>
          <li>
            <Link to="/code-together">
              Code Together
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
