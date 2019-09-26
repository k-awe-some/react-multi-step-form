import React, { useState } from "react";

import FormUserDetails from "./form-user-details.component";
import FormPersonalDetails from "./form-personal-details.component";
import Confirm from "./confirm.component";
import Success from "./success.component";

const UserForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  });

  const { step, firstName, lastName, email, occupation, city, bio } = state;
  const values = { firstName, lastName, email, occupation, city, bio };

  const nextStep = () => setState({ ...state, step: step + 1 });
  const prevStep = () => setState({ ...state, step: step - 1 });

  const handleChange = input => event => {
    setState({ ...state, [input]: event.target.value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );

    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );

    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );

    case 4:
      return <Success />;

    default:
      return;
  }
};

export default UserForm;
