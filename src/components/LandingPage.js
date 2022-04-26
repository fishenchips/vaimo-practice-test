import React from "react";
import Header from "./Header";
import Products from "./Products";

function LandingPage(props) {
  return (
    <>
      <Header
        onAdd={props.onAdd}
        cartItems={props.cartItems}
        setCartItems={props.setCartItems}
      />
      <main>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="products-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              <Products
                onAdd={props.onAdd}
                //products={props.products}
                //setProducts={props.setProducts}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
