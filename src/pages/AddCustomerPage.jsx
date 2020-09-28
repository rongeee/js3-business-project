import React from "react";
import AddCustomerForm from "../components/AddCustomerForm";
import { WrapperAlignStart, Headline } from "../style/Components";

const AddCustomerPage = () => {
  return (
    <WrapperAlignStart>
      <Headline>Add Customer</Headline>
      <AddCustomerForm />
    </WrapperAlignStart>
  );
};

export default AddCustomerPage;
