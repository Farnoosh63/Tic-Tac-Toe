import classes from "./PairProgramming.module.css";
import Button  from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function PairProgramming() {
  return (
    <div className={classes.pairprogramming}>
      <h3>What is Pair Programming?</h3>
      <p>
        Pair Programming is where two people wite code together using one
        computer at the same time. In the virtual world, we will virtually share
        a screen and the same code editor and both programmers can control the
        keyboard at the same and programming out loud.
      </p>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <Button variant="success" size="lg" href="/">
              &#8810; Back
            </Button>
          </Col>
          <Col md={4}>
            <Button
              variant="success"
              size="lg"
              href="/pair-programming/benefits"
              className={classes.right}
            >
              Next &#8811;
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PairProgramming;
