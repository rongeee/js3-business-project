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

  onInputChange = (e, attr, setState) => {
    setState((prevState) => {
      switch (attr) {
        case "name":
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

  validateInputs = (item, setState) => {
    if (!item.name || item.name === "") {
      setState(`Name must be filled`);
      return false;
    } else if (item.vatNr && !this.checkVatInput(item.vatNr.toUpperCase())) {
      setState("Vat Nr must start with SE and have 10 numbers.");
      return false;
    } else if (!item.reference) {
      setState(`Reference must be filled`);
      return false;
    } else {
      setState(null);
      return true;
    }
  };

  checkVatInput = (input) => {
    const regex = new RegExp(/^(SE)?[0-9]{10}$/);

    return regex.test(input);
  };
}
