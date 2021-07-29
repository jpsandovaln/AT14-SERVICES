import React from 'react'
import { makeStyles } from '@material-ui/core';
import Navbar from './Nabvar';
import SideBar from './SideBar';

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
    <div className={classes.root}>
        <Navbar />  
        <SideBar />
        <div className={classes.content}>
            <div className={classes.toolbar}></div>
            Content
        </div>
    </div>
  );
}

export default Container;
