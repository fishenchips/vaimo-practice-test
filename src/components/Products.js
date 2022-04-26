import React, { useState, useEffect } from "react";
import ProductContent from "./ProductContent";

function Products(props) {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return products.map((product) => (
    <ProductContent
      products={products}
      setProducts={setProducts}
      //sending down the argument too
      product={product}
      key={product.id}
      name={product.name}
      price={product.price}
      image={product.image_link}
      onAdd={props.onAdd}
    />
  ));
}

export default Products;
