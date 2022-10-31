import React, {useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Components/Store/CartProvider";

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const cartShownHandler=()=>{
    setCartIsShown(true)
  }
  const cartHideHandler=()=>{
    setCartIsShown(false)
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={cartHideHandler}/>}
      <Header onShowCart={cartShownHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
