import React, { useState } from "react";
import { Btn, FormContainer, FormInput } from "../style/Components";
import { startCase } from "lodash";
import UserKit from "../data/UserKit";
import FormKit from "../data/FormKit";
import { useHistory } from "react-router-dom";

const AddCustomerForm = () => {
  const [customer, setCustomer] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const userKit = new UserKit();
  const formKit = new FormKit();
  const history = useHistory();

  const renderInput = () => {
    const data = formKit.formData;
    return data.map((item, index) => {
      return (
        <FormInput key={index}>
          <label htmlFor={item[0]}>{startCase(item[0])}</label>
          <input type={item[1]} name={item[0]} placeholder={startCase(item[0])} onChange={(e) => formKit.onInputChange(e.target.value, item[0], setCustomer)} />
        </FormInput>
      );
    });
  };

  const handleClick = () => {
    formKit.validateInputs(customer, setErrorMsg, "customer");

    if (formKit.validateInputs(customer, setErrorMsg, "customer")) {
      return userKit
        .addCustomer(customer)
        .then(() => {
          history.push("/");
        })
        .catch((err) => setErrorMsg(err));
    }
  };

  return (
    <FormContainer>
      {errorMsg && <p>{errorMsg}</p>}
      {renderInput()}
      <Btn onClick={() => handleClick()}>Add</Btn>
    </FormContainer>
  );
};

export default AddCustomerForm;
