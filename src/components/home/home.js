import { Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-grid gap-2 mb-4">
      <Alert variant="success">
        <Alert.Heading>
          Remote Pair Programming with Farnoosh Johnson
        </Alert.Heading>
        <p>
          As part of the Menlo training, one of my takeaways was learning how to
          remotely pair programming.
        </p>
        <hr />
        <p className="mb-0 fst-italic">
          This app is built on Reactjs, a Javascript Library.
        </p>
      </Alert>
      <Button variant="warning" size="lg">
        <Link
          to="/Tic-Tac-Toe/game"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          Game
        </Link>
      </Button>
      <Button variant="success" size="lg">
        <Link
          to="/Tic-Tac-Toe/pair-programming"
          className="text-decoration-none"
          style={{ color: "white" }}
        >
          What is Pair Programming?
        </Link>
      </Button>
    </div>
  );
}

export default Home;
