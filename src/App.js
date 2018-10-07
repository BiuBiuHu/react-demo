import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from  './components/home/home.js';
import About from './components/about/about.js';
import List from './components/list/list.js';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/list" component={List} />
    </div>
  </Router>
);

export default App;
