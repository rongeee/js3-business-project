import React from "react";
import ProductDetails from "../components/ProductDetails";

const CustomerDetailPage = (props) => {
  const customerId = props.match.params.id;

  return (
    <div>
      <ProductDetails id={customerId} />
    </div>
  );
};

export default CustomerDetailPage;
