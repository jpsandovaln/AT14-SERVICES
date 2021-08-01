import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core';
import Home from '../../components/Home';
import Search from '../../components/Search';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


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

const Converter = () => {
  const classes = styles();
  const uploadSection = () => {
    
  };



  return (
        <Router>
            <div class="container">
                <div className="btn-group">
                    <Link to="/" className="btn btn-dark">
                        Home
                    </Link>
                    <Link to="/Search" className="btn btn-dark">
                        Search
                    </Link>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Search" component={Search} />
            </Switch>
        </Router>
  );
}

export default Converter;