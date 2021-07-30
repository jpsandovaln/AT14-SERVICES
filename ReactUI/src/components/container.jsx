import React from 'react'
import { makeStyles } from '@material-ui/core';
import Navbar from './Nabvar';
import SideBar from './SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MachineLearing from "./FileUpload"
import Home from "../imports/ui/components/Home";

const styles = makeStyles(theme=>({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
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
            </Switch>
        </div>
    </div>
    </Router>
  );
}

export default Container;
