import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Music from './components/Music';
import Hockey from './components/Hockey/Hockey';
import Webdev from './components/Webdev'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

       class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
       <Switch>
         <Route exact path ="/" component={Home}/>
         <Route exact path ="/about" component={About}/>
         <Route exact path ="/music" component={Music}/>
         <Route exact path ="/hockey" component={Hockey}/>
         <Route exact path ="/webdev" component={Webdev}/> 
       </Switch> 
      </div>
    );
  }
}


export default App;
