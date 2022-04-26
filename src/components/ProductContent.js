import React, { useState } from "react";

function ProductContent(props) {
  return (
    <div className="product-container col mb-4">
      <div className="card shadow-sm h-100">
        <img
          className="mx-5 mx-sm-3 px-5 px-sm-0 img-fluid"
          src={props.image}
          alt=""
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-text mb-3">{props.name}</h6>
          <div className="d-flex mt-auto justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => props.onAdd(props.product)}
            >
              Buy
            </button>
            <p className="m-0">{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
