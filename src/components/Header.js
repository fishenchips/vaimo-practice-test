import React from "react";
import CartModal from "./cart/CartModal";

function Header(props) {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <strong>My webshop.com</strong>
          </a>
          <CartModal
            onAdd={props.onAdd}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
