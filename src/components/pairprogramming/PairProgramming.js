import classes from "./PairProgramming.module.css";

function PairProgramming() {
  return (
    <div className={classes.pairprogramming}>
      <ul className={classes.left}>
        Code Together
        <li>Code together is a remote pair programming platform</li>
        <li>There is one host and three participants on the free plan</li>
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
        <li>Terminal/ Console Write access is limited to the paid plans</li>
        <li>
          If you signin to a Team it will unlocks rapid collaboration and
          additional functionality like write-access to terminals
        </li>
      </ul>
      <ul className={classes.right}>
        VS Code Live Share
        <li>
          It's an extension in VS Code, meaning you need a Microsoft account or
          a GitHub account to use it
        </li>
        <li>
          There is one host and deafult of five participants but can increase
          the guest limit to 30
        </li>
        <li>Participants can use VS Code, or web browser</li>
        <li>
          Identifies a user by Microsoft or Github account.You also can join as
          an anonymous with limited feature.
        </li>
        <li>
          Participants can code in their local VScode or a web broswer on their
          phone.
        </li>
        <li>
          The user joined with a web browser will have limited features with
          read-only access.
        </li>
        <li>Everybody can code on the same file at the same time</li>
        <li>
          Read/Write access to Terminal/ Console for logged in users (Microsoft
          Account or Github Account)
        </li>
        <li>Share a web page by installing "Browser Preview" Extension.</li>
      </ul>
      <ul className={classes.left}>
        Other platform for real-time collaboration
        <li>
          Duckly (Support VS Code, IntelliJ IDEA, Android Stidio, Wenstorm,
          PyCharm, Phpstorm, GoLand, RubyMine, Rider, Clion, AppCode, DataGrip)
        </li>
        <li>
          Floobits (Support Sublime Text, Atom, Neovim, Emacs, IntelliJ IDEA)
        </li>
        <li>CoScreen (Any IDE)</li>
      </ul>
    </div>
  );
}

export default PairProgramming;
