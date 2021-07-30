import React from "react";
import { ThemeProvider} from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

import Container from './imports/ui/pages/home'
import Converter from './imports/ui/pages/converter'

const theme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <Container />
    </ThemeProvider>
  );
}

export default App;