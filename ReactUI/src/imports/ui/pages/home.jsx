import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core';
import Navbar from '../modules/navbar/Nabvar';
import SideBar from '../modules/sidebar/SideBar';
import UploadImages from '../components/images-upload';
import Home from '../components/Home';
import Search from '../components/Search';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


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
    <Router>
      <div className={classes.root}>
        <Navbar />
        <SideBar />
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/MLendPoint" component={MachineLearing} />
            <Route exact path="/MLendPointOld" component={Search} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Container;
