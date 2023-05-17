import React from "react";
import restaruntImage from "../../assets/restarunt.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Restarunt</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={restaruntImage} alt="A table full of delicious food." />
      </div>
    </React.Fragment>
  );
};
export default Header;
