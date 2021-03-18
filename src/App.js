import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AboutUs from './containers/AboutUs';
import Post from './containers/Post';
function App() {
  return (

    <Router>
    <div className="App">
      <Header/>
      <Hero/>
      <Route path="/" exact component={Home}/>
      <Route path="/About-us"component={AboutUs}/>
      <Route path="/Posts"component={Post}/>
      <Route/>
    </div>
    </Router>
  );
}

export default App;
