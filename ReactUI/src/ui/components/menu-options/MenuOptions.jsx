import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  positionText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    margin: theme.spacing(0),
  },
  box: {
    position: "fixed",
  }
}));

function MenuOptions(props) {
  const classes = useStyles();

  const testContent = [
    { title: "Home", icon: <HomeIcon />, path: "/" },
    { title: "Converter", icon: <AutorenewIcon />, path: "/Converter" },
    { title: "Machine Learning", icon: <DashboardIcon />, path: "/FileUpload" },
  ];

  return (
    <div className>
      <div className={`${classes.toolbar} ${classes.positionText}`} >
        <h3 className={classes.menuText}>Menu</h3>
      </div>
      <Divider />
      <List>
        {testContent.map((item) => (
          <ListItem button key={item.title} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MenuOptions;
