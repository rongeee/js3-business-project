import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CustomerList from "../components/CustomerList";
import styled from "styled-components";
import { Btn, WrapperAlignStart, Headline } from "../style/Components";
import { CustomerContext } from "../contexts/BusinessContext";

const HomePage = () => {
  return (
    <WrapperAlignStart>
      <Headline>Customers</Headline>
      <CustomerList />
      <Link to={`/addcustomer`}>
        <Btn>Add Customer</Btn>
      </Link>
    </WrapperAlignStart>
  );
};

export default HomePage;
