import React from 'react';

import ChangingKeys from './ChangingKeys/ChangingKeys'

import Feedback from './Feedback/Feedback'

const Webdev = () => {
  return (
    <div>
   <h3>My Web Dev Story</h3>
   <p>After Several years of audio engineering - I decided it was finally time to move on to a different field, I enjoyed having 
     a skill that was both in demand and mentally rewarding
   </p>
   <a href="https://github.com/DougDeJong">My Github</a>

   <h4>Here are some of my projects!</h4>
   <div className="container">
   <div className="row">
   <ChangingKeys />
   <Feedback />
   </div></div>
    </div>
  )
}

export default Webdev;
