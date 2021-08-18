import {
  Card,
  ListGroup,
  ListGroupItem,
  Alert,
  Breadcrumb,
} from "react-bootstrap";
import classes from './Tools.module.css';

const image = {
    width: "5rem",
    padding: "1px 1px 1px 0px"
}
function Tools() {
  return (
    <div>
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
              There is one host and deafult of five participants but can
              increase the guest limit to 30
            </ListGroupItem>
            <ListGroupItem>
              Participants can use VS Code, or web browser
            </ListGroupItem>
            <ListGroupItem>
              Identifies a user by Microsoft or Github account.You also can join
              as an anonymous with limited feature.
            </ListGroupItem>
            <ListGroupItem>
              Participants can code in their local VScode or even a web broswer
              on their phone.
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
      <Alert variant="primary" className="mt-5">
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
    </div>
  );
}

export default Tools;