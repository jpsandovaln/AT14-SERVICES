import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core';
import SideBar from '../../modules/sidebar/SideBar';


import MachineLearing from "./FileUpload";
import Home from "../imports/ui/components/Home";
import Search from "../imports/ui/components/Search";
import Navbar from "../modules/navbar/Nabvar";
import SideBar from "../modules/sidebar/SideBar";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Container = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
        <SideBar />
    </div>
  );
};

export default Container;
