import React from 'react';
import "./Header.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';

const Header = () => {
    return (
        <div className="header">
            <Home></Home>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Link</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/work">
                        <Work></Work>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/blog">
                        <Blog></Blog>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
};

export default Header;