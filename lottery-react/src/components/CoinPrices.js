import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { PlayContext } from "../context/PlayContext";

const coinCodes = { 
  Bitcoin:{value:"\u20BF"},
  Ethereum:{value:"Ξ"},
  Litecoin:{value:'L'}
};
const useStyles = makeStyles({
  font:{
    fontSize:'.9rem'
  },
  btcWrapper:{
    padding:'.6em',
    textAlign: 'center',

  },
  btc:{
    fontWeight:'bold',
    display:'block',
    fontSize:'.6em',
    color: '#00d68b',
    textAlign: 'center',
    fontFamily:'Montserrat'
  }
});
const CoinPrices = () => {
  const classes = useStyles()
  const { coinPrices } = useContext(PlayContext);
  const renderCoins = (coinsObj) => {
    return coinsObj && coinsObj['Markets'].map((coin, index) => {
      return (<div  key={index}className={classes.btcWrapper}>
          <Typography className={classes.font} color="inherit">
            <span className={classes.btc}>{coin.Name} {coinCodes[coin.Name].value} </span>
            <span className={classes.amount}>${Math.round(coin.Price)}</span>
          </Typography>
        </div>) 
      })
  }
  if(coinPrices.length<1){
    return <Typography>Wait....</Typography>
  } else {
    return renderCoins(coinPrices) 
  }
};

export default CoinPrices;
