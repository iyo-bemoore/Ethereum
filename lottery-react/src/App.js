import React from "react";
import Container from '@material-ui/core/Container';
import Header from "./components/Header";
import Form from "./components/Form";
import PlayContextProvider from "./context/PlayContext";
import GameCard from "./components/Card";

const App = () => {
  return(
    <React.Fragment>
    <PlayContextProvider>
      <Header/>
    <Container fixed>
      <GameCard/>
      <Form/>
    </Container>
     </PlayContextProvider>
    </React.Fragment>
  )
}

export default App;
