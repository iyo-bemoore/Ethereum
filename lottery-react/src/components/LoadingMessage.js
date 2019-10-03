import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  message: {
    color: '#91A5BB',
    textAlign:'center',
    marginBottom:'6rem'
  }
});
const LoadingMessage = ({ message }) => {
  const classes = useStyles();
  return (
      <Typography className={ classes.message } color="textSecondary">
        {message}
      </Typography>
  );
};

export default LoadingMessage;
