import classes from "./Header.module.css";
import { Fragment } from "react";

import cafeImage from "../../assets/cafeImage.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>к о Х в е</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={cafeImage} alt="Image of our cool cafe" />
      </div>
    </Fragment>
  );
};

export default Header;
