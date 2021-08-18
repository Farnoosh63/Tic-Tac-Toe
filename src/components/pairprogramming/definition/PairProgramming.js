import classes from "./PairProgramming.module.css";
import Button  from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function PairProgramming() {
  return (
    <div className={classes.pairprogramming}>
      <h3>What is Pair Programming?</h3>
      <p>
        Pair Programming is where two people wite code together using one
        computer at the same time. In the virtual world, we will remotely share
        a screen and the same code editor and both programmers can control the
        keyboard at the same and programming out loud.
      </p>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <Button variant="success" size="lg">
              <Link
                to="/Tic-Tac-Toe"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                &#8810; Back
              </Link>
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="success" size="lg" className={classes.right}>
              <Link
                to="/Tic-Tac-Toe/pair-programming/benefits"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Next &#8811;
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PairProgramming;
