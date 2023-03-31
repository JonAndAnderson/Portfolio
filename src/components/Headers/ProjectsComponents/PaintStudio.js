import React from 'react';
import Buttons from './OtherComponents/Buttons';
import TwitchStream from './OtherComponents/TwitchEmbed';

function PaintStudio(props) {
  const { onChange } = props;

  const handleClick = () => {
    props.onChange(
    <div>
      <p>The Paint Studio is a livestream that allows a chatroom to create art in real time. The stream has a website overlaid on it 
        to add interactive software so every robot you might be able to control comes with a catch. 
        It takes teamwork and a lot of typing to get stuff to paint here.
      </p>
      <TwitchStream channel="ThePaintStudio" />
      <div>
      <Buttons onChange={onChange} />
      </div>
    </div>);
  }
  
  return (

  <div>
    <div onClick={handleClick}>The Paint Studio</div>
  </div>
  );
}

export default PaintStudio;