import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import PlayContextProvider from "./context/PlayContext";
import GameCard from "./components/Card";
import Grid from "@material-ui/core/Grid";
import SubHeader from "./components/SubHeader";
import Winner from "./components/Winner";

const App = () => {
  return (
    <React.Fragment>
      <PlayContextProvider>
        <Header />
        <SubHeader />
        <Container fixed>
          <Grid item xs={12}>
            <GameCard/>
          </Grid>
          <Winner/>
        </Container>
      </PlayContextProvider>
    </React.Fragment>
  );
};

export default App;
