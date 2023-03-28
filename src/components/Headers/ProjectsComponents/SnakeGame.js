import React from 'react';
import Buttons from './OtherComponents/Buttons';

function SnakeGame(props) {
  const { onChange } = props;

  const handleClick = () => {
    props.onChange(
    <div>
      <p>I just thought it would be interesting to see a snake game here. Truth be told, a lot of the math for this I ripped from somewhere else button
        how it looks is all me!
      </p>
      <Buttons onChange={onChange} />
    </div>);
  }
  
  return (

  <div>
    <div onClick={handleClick}>Play Snake</div>
  </div>
  );
}

export default SnakeGame;