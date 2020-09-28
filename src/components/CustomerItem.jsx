import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomerItem = ({ customer }) => {
  return (
    <>
      <ListItem>
        <p>{customer.name}</p>
        <p>{customer.organisationNr ? customer.organisationNr : "N/A"}</p>
        <p>{customer.reference ? customer.reference : "N/A"}</p>
        <StyledLink to={`/customer/${customer.id}`}>View Details</StyledLink>
      </ListItem>
    </>
  );
};

export default CustomerItem;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;
