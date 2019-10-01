import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ethereumLogo from '../assets/images/etherLogo.png';
import { PlayContext } from "../context/PlayContext";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding:30
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  image: {
    width: 64,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const GameCard =  () => {
  const classes = useStyles();
  const {manager, players, balance} = useContext(PlayContext);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={ethereumLogo}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Contract balance
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Owner : {manager}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Players: {players.length}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{balance} &diams;</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default GameCard;