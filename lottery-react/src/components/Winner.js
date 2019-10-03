import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { PlayContext } from "../context/PlayContext";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background:'#93b2f8',
    color:'#FFF'
  },
  buttonWrapper: {
    textAlign:'center',
    marginTop:'4rem'
  },
  input: {
    display: 'none',
  },
}));
const Winner = () => { 
    const classes = useStyles();
    const { pickWinner } = useContext(PlayContext);
    
    const pickTheWinner = async () => {
        await pickWinner()
    }
    return (
      <div className={classes.buttonWrapper} >
        <Button 
          onClick={pickTheWinner}
          variant="contained" className={classes.button}>
          Pick a Winner!
        </Button>
      </div>
    );
  }
export default Winner;