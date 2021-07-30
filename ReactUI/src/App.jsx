import React from "react";
import { ThemeProvider} from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

import Container from './components/container'

const theme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <Container />
    </ThemeProvider>
  );
}

export default App;