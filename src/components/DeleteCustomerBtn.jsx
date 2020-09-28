import React from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import { BtnSecondary } from "../style/Components";

const DeleteCustomerBtn = ({ id }) => {
  const userKit = new UserKit();
  const history = useHistory();

  const handleClick = () => {
    userKit.deleteCustomer(id).then(() => {
      history.push("/");
    });
  };
  return <BtnSecondary onClick={() => handleClick()}>Delete</BtnSecondary>;
};

export default DeleteCustomerBtn;
