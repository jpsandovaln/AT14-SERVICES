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

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

function MenuOptions(props) {
  const classes = useStyles();

  const testContent = [
    { title: "Home", icon: <HomeIcon />, path: "/" },
    { title: "Converter", icon: <AutorenewIcon />, path: "/" },
    { title: "Machine Learning", icon: <DashboardIcon />, path: "/" },
  ];

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {testContent.map((item) => (
          <ListItem button key={item.title}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MenuOptions;
