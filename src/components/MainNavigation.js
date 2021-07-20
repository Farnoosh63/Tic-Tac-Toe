import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>React and codetogether</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Game</Link>
          </li>
          <li>
            <Link to="/code-together">Code Together</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
