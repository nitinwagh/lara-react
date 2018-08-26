import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import NavBar from '../components/NavBar';
import Home from '../components/Home'; 

export default class Index extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <NavBar />
                    
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </div>                
            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
