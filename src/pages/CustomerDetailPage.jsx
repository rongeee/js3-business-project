import React from "react";
import ProductDetails from "../components/ProductDetails";
import { WrapperAlignStart } from "../style/Components";

const CustomerDetailPage = (props) => {
  const customerId = props.match.params.id;

  return (
    <WrapperAlignStart>
      <ProductDetails id={customerId} />
    </WrapperAlignStart>
  );
};

export default CustomerDetailPage;
