import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Error404 from "./components/Error404";

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <div className="btn-group">
                    <Link to="/" className="btn btn-dark">
                        Home
                    </Link>
                    <Link to="/Search" className="btn btn-dark">
                        Search
                    </Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Search" component={Search} />
                    <Route path="" component={Error404} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
