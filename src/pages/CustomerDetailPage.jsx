import React from "react";
import CustomerDetails from "../components/CustomerDetails";
import { WrapperAlignStart } from "../style/Components";

const CustomerDetailPage = (props) => {
  const customerId = props.match.params.id;

  return (
    <WrapperAlignStart>
      <CustomerDetails id={customerId} />
    </WrapperAlignStart>
  );
};

export default CustomerDetailPage;
