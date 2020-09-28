import React, { useEffect, useState } from "react";
import UserKit from "../data/UserKit";
import FormKit from "../data/FormKit";
import { Btn, FormContainer, FormInput } from "../style/Components";
import { startCase } from "lodash";
import DeleteCustomerButton from "./DeleteCustomerBtn";

const ProductDetails = ({ id }) => {
  const [currentCustomer, setCurrentCustomer] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const userKit = new UserKit();
  const formKit = new FormKit();

  const getCustomer = () => {
    userKit
      .getCustomer(id)
      .then((res) => res.json())
      .then((data) => {
        const payload = {
          name: data.name,
          organisationNr: data.organisationNr,
          vatNr: data.vatNr,
          reference: data.reference,
          paymentTerm: data.paymentTerm,
          website: data.website,
          email: data.email,
          phoneNumber: data.phoneNumber,
        };
        setCurrentCustomer(payload);
      });
  };

  const renderCustomer = () => {
    return (
      <div>
        {Object.entries(currentCustomer).map((item, index) => {
          return (
            <FormInput key={index}>
              <h3>{startCase(item[0])}</h3>
              <p>{item[1] ? item[1] : "N/A"}</p>
            </FormInput>
          );
        })}
        <DeleteCustomerButton id={id} />
        <Btn onClick={() => setIsEditing((prevState) => !prevState)}>Edit Customer</Btn>
      </div>
    );
  };

  const renderEditCustomer = () => {
    const data = formKit.formData;

    return (
      <div>
        {data.map((item, index) => {
          let key = item[0];

          return (
            <FormInput key={index}>
              <label htmlFor={item[0]}>{startCase(item[0])}</label>
              <input
                type={item[1]}
                name={item[0]}
                placeholder={startCase(item[0])}
                onChange={(e) => formKit.onInputChange(e.target.value, item[0], setCurrentCustomer)}
                value={currentCustomer[key]}
              />
            </FormInput>
          );
        })}
        <Btn onClick={() => updateCustomer(currentCustomer)}>Update</Btn>
      </div>
    );
  };

  const updateCustomer = (customer) => {
    formKit.validateInputs(customer, setErrorMsg);
    if (formKit.validateInputs(customer, setErrorMsg)) {
      return userKit
        .updateCustomer(id, customer)
        .then(setIsEditing((prevState) => !prevState))
        .catch((err) => setErrorMsg(err));
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <FormContainer>
      {errorMsg && <p>{errorMsg}</p>}
      {currentCustomer && <h2>ID {currentCustomer.id}</h2>}
      {currentCustomer && !isEditing ? renderCustomer() : renderEditCustomer()}
    </FormContainer>
  );
};

export default ProductDetails;
