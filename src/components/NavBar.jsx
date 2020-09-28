import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/BusinessContext";
import SignOutBtn from "./SignOutBtn";

const NavBar = ({ children }) => {
  const currentUser = useContext(UserContext).currentUser;

  return (
    <div>
      <Header>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        {currentUser && currentUser.firstName ? (
          <div>
            <small>
              Logged in as: {currentUser.firstName} {currentUser.lastName} - {currentUser.email}
            </small>
            <SignOutBtn />
          </div>
        ) : (
          ""
        )}
      </Header>
      <main>{children}</main>
    </div>
  );
};

export default NavBar;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.bodyDarker};
  padding: 1em;
  position: absolute;
  top: 0;
  width: 100%;
`;
