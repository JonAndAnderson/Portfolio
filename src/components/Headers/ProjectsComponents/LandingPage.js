import React from 'react';
import jcvhr from '../../../jcvhr.JPG'
import './LandingPage.css'
import Buttons from './OtherComponents/Buttons';

function LandingPage(props) {
  const { onChange } = props;

  const handleClick = () => {
    props.onChange(
    <div>

      <div>
        <img src={jcvhr} alt="Logo" />;
      
      </div>
        
      <p>
        JCVHR.com was a landing page I created when I first started web development. 
        I've done several since and really learned
        the idea behind mobile first development. 
      </p>
      <Buttons onChange={onChange} />
    </div>);
  }
  
  return (

  <div>
    <div onClick={handleClick}>Landing Page</div>
  </div>
  );
}

export default LandingPage;