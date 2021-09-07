import MainNavigation from "../navigation/MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  console.log("Layout: Rendered");

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
