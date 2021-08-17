import { Route, Router, Switch } from 'react-router-dom';
import GameBoard from './components/game/Game';
import Layout from './components/layout/Layout';
import PairProgramming from './components/pairprogramming/PairProgramming';
import Home from './components/home/home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Layout >
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/game">
          <GameBoard />
        </Route>
        <Route path="/pair-programming">
          <PairProgramming />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
