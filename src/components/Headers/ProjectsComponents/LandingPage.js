import React from 'react';
import jcvhr from '../../../images/jcvhr.JPG'
import smalljcvhr from '../../../images/smalljcvhr.JPG'
import './LandingPage.css'
import Buttons from './OtherComponents/Buttons';

function LandingPage(props) {
  const { onChange } = props;

  const handleClick = () => {
    props.onChange(
    <div>

      <div>
        <img
          srcSet={`
            ${jcvhr} 1024w,
            ${smalljcvhr} 768w
          `}
          sizes="
            (min-width: 1024px) 1024px,
            768px"

          src={jcvhr}
          alt="jcvhr"
        />
      
      </div>
        <div>
        <p>
        JCVHR.com was a landing page I created when I first started web development. 
        I've done several since and really learned
        the idea behind mobile first development. 
      </p>
        </div>

      <div>
      <Buttons onChange={onChange} />
      </div>
    </div>);
  }
  
  return (

  <div>
    <div onClick={handleClick}>Landing Page</div>
  </div>
  );
}

export default LandingPage;