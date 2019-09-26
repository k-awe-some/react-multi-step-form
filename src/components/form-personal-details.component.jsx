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

const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const { occupation, city, bio } = values;

  const continueToNextStep = event => {
    event.preventDefault();
    nextStep();
  };

  const goBackToPrevStep = event => {
    event.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={bio}
        />
        <br />
        <RaisedButton
          label="Back"
          primary={true}
          style={styles.button}
          onClick={goBackToPrevStep}
        />
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

export default FormPersonalDetails;
