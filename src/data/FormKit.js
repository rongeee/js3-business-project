import { startCase, toLower } from "lodash";

export default class {
  formData = [
    ["name", "text"],
    ["organisationNr", "text"],
    ["vatNr", "text"],
    ["reference", "text"],
    ["paymentTerm", "number"],
    ["website", "string"],
    ["email", "email"],
    ["phoneNumber", "tel"],
  ];

  registerFormData = [
    ["firstName", "text"],
    ["lastName", "text"],
    ["email", "email"],
    ["password", "password"],
    ["organisationName", "text"],
    ["organisationKind", "text"],
  ];

  onInputChange = (e, attr, setState) => {
    setState((prevState) => {
      switch (attr) {
        case "name":
          return {
            ...prevState,
            [attr]: startCase(toLower(e)),
          };
        case "firstName":
          return {
            ...prevState,
            [attr]: startCase(toLower(e)),
          };
        case "lastName":
          return {
            ...prevState,
            [attr]: startCase(toLower(e)),
          };

        case "vatNr":
          return {
            ...prevState,
            [attr]: e.toUpperCase(),
          };

        default:
          return {
            ...prevState,
            [attr]: e,
          };
      }
    });
  };

  validateInputs = (item, setState, form) => {
    switch (form) {
      case "customer":
        if (!item.name) {
          setState(`Name must be filled`);
          return false;
        } else if (item.vatNr && !this.checkVatInput(item.vatNr.toUpperCase())) {
          setState("Vat Nr must start with SE and have 10 numbers.");
          return false;
        } else if (!item.reference) {
          setState(`Reference must be filled`);
          return false;
        } else if (!item.paymentTerm || isNaN(item.paymentTerm)) {
          setState(`Payment Term must be filled and only include numbers.`);
          return false;
        } else if (!item.email || !this.checkValidEmail(item.email)) {
          setState(`Please enter a valid e-mail adress.`);
          return false;
        } else {
          setState(null);
          return true;
        }

      case "user":
        if (!item.firstName) {
          setState(`First Name must be filled`);
          return false;
        } else if (!item.lastName) {
          setState("Last Name must be filled.");
          return false;
        } else if (!item.email || !this.checkValidEmail(item.email)) {
          setState(`Not a valid e-mail adress.`);
          return false;
        } else if (!item.organisationKind || isNaN(item.organisationKind) || item.organisationKind > 2 || item.organisationKind < 0) {
          setState(`Organisation Kind must be 0, 1 or 2.`);
          return false;
        } else if (!item.password || item.password.length < 8) {
          setState(`Password needs to be 8 characters.`);
          return false;
        } else {
          setState(null);
          return true;
        }
      default:
    }

    // case "addCustomer":
    //   if (!item.firstName || item.firstName === "") {
    //     setState("First name must be filled.");
    //     return false;
    //   }
  };

  checkVatInput = (input) => {
    const regex = new RegExp(/^(SE)?[0-9]{10}$/);

    return regex.test(input);
  };

  checkValidEmail = (input) => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/);
    return emailRegex.test(input);
  };
}
