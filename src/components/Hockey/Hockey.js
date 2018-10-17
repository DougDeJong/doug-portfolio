import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EAimage from './sponsored-white.png'

class Hockey extends Component {

  refreshPage(){ 
    window.location.reload(); 
}

render(){

  return (
    <div>
      <h3>Here are some of my Hockey Creative Outlets</h3>
          <button type="button" className="btn btn-info" onClick={ this.refreshPage }> <span>EMBED TWEETS!</span> </button> 
        <div className="row music-row">
          <div className="col-6">
      <div className="container">
          <a className="twitter-timeline" href="https://twitter.com/TheDeJtv?ref_src=twsrc%5Etfw">Tweets by TheDeJtv</a>

          </div>
          <div className="col-6">
      <image src={EAimage} alt="ea image"/>

          <div id="twitch-embed"></div>

          </div>
          
        </div>
      </div>
    </div>
  );
};
}

export default Hockey;
