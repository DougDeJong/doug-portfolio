import React, { Component } from 'react';

class Feedback extends Component{
  render(){
    return(
      <div className="col-6">

      <h4>This is my first Web App, Feedback! </h4>
      <a href="jong-feedback.herokuapp.com">Click Here to Check it Out!</a>
      <img src={require("./feedback.png")} className="img-fluid"/>
      <p> My second Ironhack project - I made this app in order to have a quickly refrencable library of all of my music demos before releasing them</p>
      </div>
    )
  }
}
export default Feedback