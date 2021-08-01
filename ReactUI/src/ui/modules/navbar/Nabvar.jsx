import React from "react";
import {AppBar, Toolbar,Typography, makeStyles, IconButton} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    flexGrow: 1,
  },
  AppBar:{
    width: `calc(100% - ${240}px)`,
    marginleft: 240,
  },

}));

const Navbar = () => {
  const classes = useStyle();

  return (
      <AppBar className={classes.AppBar} color="primary">
        <Toolbar>
            <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                <MenuIcon />
            </IconButton>
          <Typography variant="h6">Sniffer dogs</Typography>
        </Toolbar>
      </AppBar>
 

  );
};

export default Navbar;