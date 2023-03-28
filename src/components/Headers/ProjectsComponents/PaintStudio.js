import React from 'react';
import Buttons from './OtherComponents/Buttons';

function PaintStudio(props) {
  const { onChange } = props;

  const handleClick = () => {
    props.onChange(
    <div>
      <p>The Paint Studio is a livestream that allows a chatroom to create art in real time. The stream has a website overlaid on it 
        to add interactive software so every robot you might be able to control comes with a catch. 
        It takes teamwork and a lot of typing to get stuff to paint here.
      </p>
      <Buttons onChange={onChange} />
    </div>);
  }
  
  return (

  <div>
    <div onClick={handleClick}>The Paint Studio</div>
  </div>
  );
}

export default PaintStudio;