import { TextField, Button } from "@material-ui/core";
import React, { useState, Fragment } from "react";

const CalcForm = () => {
  const [myInput, setMyInput] = useState(0);
  let inputA = 0;
  let inputB = 0;

  const sumValues = event => {
    event.preventDefault();
    setMyInput(inputA + inputB);
  };

  return (
    <Fragment>
      <form autoComplete="off">
        <TextField
          onChange={event => {
            inputA = Number(event.target.value);
          }}
        />
        +
        <TextField
          onChange={event => {
            inputB = Number(event.target.value);
          }}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={sumValues}>
          Sum Values
        </Button>
      </form>
      <br />
      <div>{myInput}</div>
    </Fragment>
  );
};

export default CalcForm;
