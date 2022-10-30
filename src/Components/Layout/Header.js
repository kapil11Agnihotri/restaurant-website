import React, { Fragment } from "react";

import classes from "./Header.module.css";
import MealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']} >
        <img src={MealsImage} alt='A table full of delicios food'/>
      </div>
    </Fragment>
  );
};

export default Header;