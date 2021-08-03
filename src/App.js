import { Route, Switch } from 'react-router-dom';
import GameBoard from './components/game/Game';
import Layout from './components/layout/Layout';
import PairProgramming from './components/pairprogramming/PairProgramming';

function App() {
  return (
    <Layout >
      <Switch>
        <Route path="/" exact>
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
