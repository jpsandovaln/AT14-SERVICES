import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Lists = () => {
  return (
    <div>
      <List component="nav" aria-label="cicle">
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/MLendPoint">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Machine Learning" to="/FileUpload" />
        </ListItem>
      </List>
      <Divider />
    </div>  
  );
};

export default Lists;
