import { Route, Switch } from 'react-router-dom';
import PairProgramming from "./components/pairprogramming/PairProgramming";
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
        <Route path="/pair-programming">
          <PairProgramming />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
