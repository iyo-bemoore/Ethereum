import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { PlayContext } from "../context/PlayContext";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing(1),
    background:'#00d68b',
    color:'#FFF'
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
  const [value, setValue] = useState('');
  const {amount, addAmount, confirmation} = useContext(PlayContext);
  
  const formSubmit = async e => {
      e.preventDefault()
      await addAmount(value)
      setValue('')
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
        type="text"
      />
      <Button type="submit" disabled={!value} variant="contained" className={classes.button}>
        Play
      </Button>
    </form>
  );
};
export default Form;

