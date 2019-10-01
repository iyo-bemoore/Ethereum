import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  }
}));

const Form = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const formSubmit = e => {
      e.preventDefault()
      console.log(value)
  }

  return (
    <form
       onSubmit={formSubmit} 
       className={classes.container} noValidate autoComplete="off">
      <TextField
        onChange={e=>setValue(e.target.value)}
        id="standard-dense"
        label="Amount"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={value}
      />
      <Button type="submit" variant="contained" color="secondary" className={classes.button}>
        Play
      </Button>
    </form>
  );
};
export default Form;
