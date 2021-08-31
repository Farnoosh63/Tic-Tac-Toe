import { Route, Switch } from "react-router-dom";
import GameBoard from "./components/game/Game";
import Layout from "./components/layout/Layout";
import PairProgramming from "./components/pairprogramming/definition/PairProgramming";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Benefits from "./components/pairprogramming/benefits/Benefits";
import Tools from "./components/pairprogramming/tools/Tools";
import Counter from "./components/counter/counter";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Tic-Tac-Toe" exact>
          <Home />
        </Route>
        <Route path="/Tic-Tac-Toe/game" exact>
          <GameBoard />
        </Route>
        <Route path="/Tic-Tac-Toe/pair-programming" exact>
          <PairProgramming />
        </Route>
        <Route path="/Tic-Tac-Toe/pair-programming/benefits" exact>
          <Benefits />
        </Route>
        <Route path="/Tic-Tac-Toe/pair-programming/tools" exact>
          <Tools />
        </Route>
        <Route path="/Tic-Tac-Toe/counter" exact>
          <Counter />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
