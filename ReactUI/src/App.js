import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search"
import Home from "./components/Home";
import Error404 from "./components/Error404";

function App() {
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
                <Route path="" component={Error404} />
            </Switch>
        </Router>
    );
}

export default App;
