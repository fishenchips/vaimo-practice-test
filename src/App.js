//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  //const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //adding a product to the cart
  const onAdd = (product) => {
    //define if product exists, if so add one more of qty
    const exist = cartItems.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (exist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? {
                ...exist,
                qty: exist.qty + 1,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="App">
      <LandingPage
        onAdd={onAdd}
        cartItems={cartItems}
        setCartItems={setCartItems}
        //products={products}
        //setProducts={setProducts}
      />
    </div>
  );
}

export default App;
