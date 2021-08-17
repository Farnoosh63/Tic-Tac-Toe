import { Button, Alert } from "react-bootstrap";

function Home() {
  return (
    <div className="d-grid gap-2 mb-4">
      <Alert variant="success">
        <Alert.Heading>
          Remote Pair Programming with Farnoosh Johnson
        </Alert.Heading>
        <p>
          As part of the Menlo training, one of my takeaways was learning how to remotely pair programming.
        </p>
        <hr />
        <p className="mb-0">
          This app is built on Reactjs, a Javascript Library.
        </p>
      </Alert>
      <Button variant="warning" size="lg" href="/game">
        Tic Tac Toe
      </Button>
      <Button variant="success" size="lg" href="/pair-programming">
        What is Pair Programming?
      </Button>
    </div>
  );
}

export default Home;
