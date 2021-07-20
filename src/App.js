import { Route, Switch } from 'react-router-dom';
import CodeTogether from './components/codetogether/CodeTogether';
import GameBoard from './components/game/Game';
import MainNavigation from './components/navigation/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <GameBoard />
        </Route>
        <Route path="/code-together">
          <CodeTogether />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
