import React, { Fragment,useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const cartShownHandler=()=>{
    setCartIsShown(true)
  }
  const cartHideHandler=()=>{
    setCartIsShown(false)
  }


  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={cartHideHandler}/>}
      <Header onShowCart={cartShownHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
