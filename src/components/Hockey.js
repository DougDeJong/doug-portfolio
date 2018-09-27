import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hockey = () => {
  return (
    <div>
      <h3>Here are some of my Hockey Creative Outlets</h3>
      <div className="container">
        <div className="row music-row">
          <div className="col-6">
          <a className="twitter-timeline" href="https://twitter.com/TheDeJtv?ref_src=twsrc%5Etfw">Tweets by TheDeJtv</a>

          </div>
          <div className="col-6">

          <div id="twitch-embed"></div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hockey;
