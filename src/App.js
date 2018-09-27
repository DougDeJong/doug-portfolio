import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Music from './components/Music';
import Hockey from './components/Hockey';
import Webdev from './components/Webdev'

       class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
       <Switch>
         <Route exact path ="/" component={Home}/>
         <Route path ="/about" component={About}/>
         <Route path ="/music" component={Music}/>
         <Route path ="/hockey" component={Hockey}/>
         <Route path ="/webdev" component={Webdev}/> 
       </Switch> 
      </div>
    );
  }
}


export default App;
