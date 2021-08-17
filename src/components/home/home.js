import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="d-grid gap-2">
      <Button variant="success" size="lg" href="/game">
        Game
      </Button>
      <Button variant="warning" size="lg" href="/pair-programming">
        Pair Programming
      </Button>
    </div>
  );
}

export default Home;
