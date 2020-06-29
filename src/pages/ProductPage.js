import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <div className="product">
        <h2>Product page</h2>
        <Product id={match.params.id} />
        <Link to="/products">Back to the product list</Link>
      </div>
    </>
  );
};

export default ProductPage;
