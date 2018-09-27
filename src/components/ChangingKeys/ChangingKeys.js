import React, { Component } from 'react';

class ChangingKeys extends Component{
  render(){
    return(
      <div className="col-6">

      <h4>This is my Game, Changing Keys! </h4>
      <a href="https://dougdejong.github.io/game-changing-keys/">Click Here to Play!</a>
      <img src={require("./changing.png")} className="img-fluid"/>
      <p> My first Ironhack project - I made this game to help people learn how to type.</p>
      </div>
    )
  }
}
export default ChangingKeys