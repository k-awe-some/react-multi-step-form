import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 25
  }
};

const Confirm = ({ nextStep, prevStep, handleChange, values }) => {
  const { firstName, lastName, email, occupation, city, bio } = values;

  const continueToNextStep = event => {
    event.preventDefault();
    // PROCESS FORM IN BACKEND CODE WOULD GO IN HERE//
    nextStep();
  };

  const goBackToPrevStep = event => {
    event.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Confirm" />
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Email" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>

        <br />
        <RaisedButton
          label="Back"
          primary={true}
          style={styles.button}
          onClick={goBackToPrevStep}
        />
        <RaisedButton
          label="Confirm"
          primary={true}
          style={styles.button}
          onClick={continueToNextStep}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Confirm;
