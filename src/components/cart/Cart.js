import React from "react";
import styles from "./cart.module.css";

function Cart(props) {
  let checkoutSum = 0;

  props.cartItems.map(
    (product) =>
      (checkoutSum += parseFloat(product.qty) * parseFloat(product.price))
  );

  const increaseQty = (item) => {
    const exists = props.cartItems.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      exists.qty += 1;
      props.setCartItems([...props.cartItems]);
    }
  };

  const decreaseQty = (item) => {
    const exists = props.cartItems.find((cartItem) => cartItem.id === item.id);
    //remove from array when qty = 1
    if (exists.qty === 1) {
      props.setCartItems(
        props.cartItems.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      exists.qty -= 1;
      props.setCartItems([...props.cartItems]);
    }
  };

  if (props.cartItems.length === 0) {
    return (
      <div className="minicart-empty text-center py-5">Nothing in cart</div>
    );
  } else {
    return (
      <div className="minicart-empty text-center py-5 ">
        {props.cartItems.map((product) => (
          <div className={styles.productList} key={product.id}>
            <div className={styles.productImg}>
              <img src={product.image_link} alt="product" />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>
                <b>{product.name}</b>
              </p>
              <div className={styles.productFooter}>
                <div className="productQTY">
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={() => decreaseQty(product)}
                  >
                    -
                  </button>
                  <span>{product.qty} </span>
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={() => increaseQty(product)}
                  >
                    +
                  </button>
                </div>
                <div className="productPrice">
                  <b>$ </b>
                  <b>
                    {(
                      parseFloat(product.qty) * parseFloat(product.price)
                    ).toFixed(2)}
                  </b>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <p className={styles.checkoutSum}>
            Total:
            <b> $ {checkoutSum.toFixed(2)}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default Cart;
