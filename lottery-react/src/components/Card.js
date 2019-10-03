import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ethereumLogo from "../assets/images/etherLogo.png";
import { PlayContext } from "../context/PlayContext";
import Form from "./Form";
const useStyles = makeStyles(theme => ({
  font:{
    fontFamily:'Montserrat',
  },
  root: {
    flexGrow: 1,
    padding: 1,
    display: "flex",
    justifyContent:'center'
  },
  balance:{
    color:'#93b2f8',
    fontFamily:'Montserrat',

  },
  paper: {
    padding: theme.spacing(2),
  
  },
  paperLeft: {
    padding: theme.spacing(2),
    marginLeft:theme.spacing(2)
  },
  image: {
    width: 64,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const GameCard = () => {
  const classes = useStyles();
  const { manager, players, balance } = useContext(PlayContext);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={ethereumLogo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.font} gutterBottom variant="subtitle1">
                  Contract balance
                </Typography>
                <Typography className={classes.font}variant="body2" gutterBottom>
                  Owner : {manager}
                </Typography>
                <Typography className={classes.font}variant="body2" color="textSecondary">
                  Current Players: {players.length}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.balance}  variant="subtitle1"> {balance} &diams;</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paperLeft}>
        <Grid container spacing={1}>
          <Form />
        </Grid>
      </Paper>
    </div>
  );
};
export default GameCard;
