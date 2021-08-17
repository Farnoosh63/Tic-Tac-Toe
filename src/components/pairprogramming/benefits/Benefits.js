import { Button, Container, Row, Col } from "react-bootstrap";
import classes from '../../pairprogramming/definition/PairProgramming.module.css';
import { Link } from "react-router-dom";

function Benefits() {
  return (
    <div>
      <h3>Benefits of Pair Programming:</h3>
      <ul>
        <li>
          A collaborative way that involves a lot of communication and
          engagement.
        </li>
        <li>
          Increase code quality, and reducing the risk of errors and going down
          the rabbit hole.
        </li>
        <li>Transfer skills in the organization.</li>
      </ul>

      <h3>Where should we use Pair Programming?</h3>
      <ul>
        <li>Complex pull request reviews</li>
        <li>Coaching</li>
        <li>Occasional problem-solving session</li>
        <li>As a recruitment Tool</li>
      </ul>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <Button variant="success" size="lg">
              <Link
                to="/Tic-Tac-Toe/pair-programming"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                &#8810; Back
              </Link>
            </Button>
          </Col>
          <Col md={4}>
            <Button
              variant="success"
              size="lg"
              className={classes.right}
            >
              <Link
                to="/Tic-Tac-Toe/pair-programming/tools"
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
export default Benefits;
