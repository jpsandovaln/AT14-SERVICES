import React from "react";
import { ThemeProvider} from "@material-ui/core/styles";
import Container from './components/container'

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;