import React from 'react'
import Lists from '../../components/Lists'
import { makeStyles } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Divider } from '@material-ui/core';


const styles = makeStyles(theme=>({
    drawer:{
        width:240,
        flexShrink:0,
    },
    drawerPaper:{
        width:240,
    },
    toolbar: theme.mixins.toolbar,
}))

const SideBar = ()=> {
  const classes = styles();
  return (
    <Drawer 
        className={classes.drawer}
        variant="permanent"
        classes={{
            paper: classes.drawerPaper
        }}
        anchor="left"
    >
        <div className={classes.toolbar}></div>
        <Divider />
        <Lists />
    </Drawer>
  );
}

export default SideBar;

