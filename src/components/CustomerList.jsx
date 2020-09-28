import React, { useContext, useEffect } from "react";
import { CustomerContext } from "../contexts/BusinessContext";
import CustomerItem from "../components/CustomerItem";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import { FormContainer } from "../style/Components";

const CustomerList = () => {
  const userKit = new UserKit();
  const setCustomers = useContext(CustomerContext).setCustomers;
  const customers = useContext(CustomerContext).customers;

  const getCustomerList = () => {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
        console.log(setCustomers);
      });
  };

  useEffect(() => {
    console.log("test");
    getCustomerList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {customers && customers.length > 0 ? (
        <div>
          <ListItem>
            <p>Name</p>
            <p>Org Nr</p>
            <p>Reference</p>
            <p>Action</p>
          </ListItem>

          {customers.map((customer) => {
            return <CustomerItem key={customer.id} customer={customer} />;
          })}
        </div>
      ) : (
        <p>No customers has been added to this account.</p>
      )}
    </Container>
  );
};

export default CustomerList;
const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Container = styled(FormContainer)`
  width: 100%;
  max-width: 1400px;
  background: ${(props) => props.theme.bodyDarker};
`;
