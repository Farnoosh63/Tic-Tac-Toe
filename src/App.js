import { Route, Switch } from 'react-router-dom';

import GameBoard from './components/Game';
import MainNavigation from './components/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <GameBoard />
        </Route>
        <Route path="/code-together">codetogether</Route>
      </Switch>
    </div>
  );
}

export default App;
