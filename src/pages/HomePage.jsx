import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CustomerList from "../components/CustomerList";
import styled from "styled-components";
import { Btn, Wrapper, Headline } from "../style/Components";
import { CustomerContext } from "../contexts/BusinessContext";

const HomePage = () => {
  const customers = useContext(CustomerContext).customers;

  return (
    <Wrap>
      <Headline>Customers</Headline>
      <CustomerList />
      <Link to={`/addcustomer`}>
        <Btn>Add Customer</Btn>
      </Link>
    </Wrap>
  );
};

export default HomePage;

const Wrap = styled(Wrapper)`
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
`;
