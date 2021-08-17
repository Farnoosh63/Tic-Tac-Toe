import { Route, Router, Switch } from 'react-router-dom';
import GameBoard from './components/game/Game';
import Layout from './components/layout/Layout';
import PairProgramming from './components/pairprogramming/definition/PairProgramming';
import Home from './components/home/home';
import "bootstrap/dist/css/bootstrap.min.css";
import Benefits from './components/pairprogramming/benefits/Benefits';
import Tools from './components/pairprogramming/tools/Tools';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/game">
          <GameBoard />
        </Route>
        <Route path="/pair-programming" exact>
          <PairProgramming />
        </Route>
        <Route path="/pair-programming/benefits">
          <Benefits />
        </Route>
        <Route path="/pair-programming/tools">
          <Tools />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
