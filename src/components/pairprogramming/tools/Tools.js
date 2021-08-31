import {
  Card,
  ListGroup,
  ListGroupItem,
  Alert,
  Breadcrumb,
  Container,
  Button,
  Row,
  Col,
  Placeholder,
} from "react-bootstrap";
import classes from "./Tools.module.css";
import { Link } from "react-router-dom";
import React from "react";

const image = {
  width: "5rem",
  padding: "1px 1px 1px 0px",
};
function Tools() {
  return (
    <React.Fragment>
      <Card className={classes.borderNone}>
        <Card.Body>
          <Card.Body className="d-flex align-items-center">
            <Card.Img
              style={image}
              variant="top"
              src="https://raw.githubusercontent.com/MicrosoftDocs/live-share/master/docs/media/vsls-icon.svg"
            />
            <Card.Title className="mt-4">VS Code Live Share</Card.Title>
          </Card.Body>

          <Card.Text>
            It's an extension in VS Code, meaning you need a Microsoft account
            or a GitHub account to use it.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Participants can use VS Code, or web browser
            </ListGroupItem>
            <ListGroupItem>
              Identifies a user by Microsoft or Github account.You also can join
              as an anonymous with limited feature.
            </ListGroupItem>
            <ListGroupItem>
              The user joined with a web browser will have limited features with
              read-only access.
            </ListGroupItem>
            <ListGroupItem>
              Everybody can code on the same file at the same time
            </ListGroupItem>
            <ListGroupItem>
              Read/Write access to Terminal/ Console for logged in users
              (Microsoft Account or Github Account)
            </ListGroupItem>
            <ListGroupItem>
              Share a web page by installing "Browser Preview" Extension.
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
      <Alert variant="secondary" className="mt-3">
        <Card>
          <Card.Body>
            <Card.Title>Other platform for real-time collaboration</Card.Title>
            <Card.Text>
              <ul>
                <li>CodeTogether (Support VS Code, IntelliJ, Eclipse)</li>
                <li>
                  Duckly (Support VS Code, IntelliJ IDEA, Android Stidio,
                  Wenstorm, PyCharm, Phpstorm, GoLand, RubyMine, Rider, Clion,
                  AppCode, DataGrip).
                </li>
                <li>
                  Floobits (Support Sublime Text, Atom, Neovim, Emacs, IntelliJ
                  IDEA)
                </li>
                <li>CoScreen (Any IDE)</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Alert>
      <h4 className="mt-5">
        The content of this page can be modified on this path:
      </h4>
      <Alert variant="secondary">
        <Breadcrumb className="p-0">
          <Breadcrumb.Item linkAs="span">src</Breadcrumb.Item>
          <Breadcrumb.Item linkAs="span">components</Breadcrumb.Item>
          <Breadcrumb.Item linkAs="span">pairprogramming</Breadcrumb.Item>
          <Breadcrumb.Item linkAs="span">tools</Breadcrumb.Item>
          <Breadcrumb.Item active>Tools.js</Breadcrumb.Item>
        </Breadcrumb>
      </Alert>
      <Container>
        <Row xs={1} md={2}>
          <Card>
            <Card.Body>
              <Card.Text>
                {/* Remove lines 106 to 113 and add your text */}
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
                {/* Remove lines 121 to 128 and add your text*/}
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Looking to add more cards? Copy <Card></Card> component from any examples above and paste it here. */}
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col className="d-grid gap-2">
            <Button variant="primary" size="lg">
              <Link
                to="/Tic-Tac-Toe/pair-programming/benefits"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                &#8810; Back
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Tools;
