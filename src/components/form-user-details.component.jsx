import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 25
  }
};

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const { firstName, lastName, email } = values;

  const continueToNextStep = event => {
    event.preventDefault();
    nextStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <h1>Form User Details</h1>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
          defaultValue={firstName}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={email}
        />
        <br />
        <RaisedButton
          label="Continue to Next Step"
          primary={true}
          style={styles.button}
          onClick={continueToNextStep}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;
