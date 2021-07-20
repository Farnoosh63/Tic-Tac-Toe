import  classes  from './CodeTogether.module.css';

function CodeTogether() {
  return (
    <div className={classes.codetogether}>
      <ul>
        <li>Code together is a remote pair programming platform</li>
        <li>There is one host and several participants</li>
        <li>
          Participants can use VS Code, IntelliJ Idea, Eclipse or web browser
        </li>
        <li>
          Participants can code in their preferred local IDE or a web broswer on
          their phone
        </li>
        <li>
          The participant environment is as capable as the host environment even
          if you join from the browser
        </li>
        <li>Everybody can code on the same file at the same time</li>
        <li>
          If you signin to a Team it will unlocks rapid collaboration and
          additional functionality like write-access to terminals
        </li>
      </ul>
    </div>
  );
}

export default CodeTogether;
