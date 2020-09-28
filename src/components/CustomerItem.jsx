import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomerItem = ({ customer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ListItem onClick={() => setExpanded((prevState) => !prevState)}>
        <p>{customer.name}</p>
        <p>{customer.organisationNr ? customer.organisationNr : "N/A"}</p>
        <p>{customer.reference ? customer.reference : "N/A"}</p>
        <Link to={`/customer/${customer.id}`}>View Details</Link>
      </ListItem>
    </>
  );
};

export default CustomerItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
