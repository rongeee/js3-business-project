import React from "react";
import { Link } from "react-router-dom";
import CustomerList from "../components/CustomerList";
import { Btn, WrapperAlignStart, Headline } from "../style/Components";

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
