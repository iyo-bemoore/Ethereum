import React, { useContext } from "react";
import { PlayContext } from "../context/PlayContext";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoadingMessage from "./LoadingMessage";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginTop: "2em",
    fontWeight: "bold",
    color: "#91A5BB",
    marginBottom: "2.4rem",
    fontFamily: "Montserrat"
  },
  pos: {
    color: "#91A5BB",
    textAlign: "center",
    marginBottom: "6rem"
  }
});
const SubHeader = () => {
  const { confirmation } = useContext(PlayContext);
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.header} variant="h5" component="h2">
        Play and make a chance to win Ether!
      </Typography>
      {!confirmation ? (
        <Typography className={classes.pos} color="textSecondary">
          All you have to do is enter an amount of Wei, and your application
          will be submitted in a few seconds!
        </Typography>
      ) : (
        <LoadingMessage message={confirmation} />
      )}
    </div>
  );
};
export default SubHeader;
