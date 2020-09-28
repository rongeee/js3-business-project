import React from "react";
import styled from "styled-components";
import AddCustomerForm from "../components/AddCustomerForm";
import { Wrapper, Headline } from "../style/Components";

const AddCustomerPage = () => {
  return (
    <Wrap>
      <Headline>Add Customer</Headline>
      <AddCustomerForm />
    </Wrap>
  );
};

export default AddCustomerPage;

const Wrap = styled(Wrapper)`
  flex-direction: column;
  max-width: 900px;
  justify-content: flex-start;
`;
