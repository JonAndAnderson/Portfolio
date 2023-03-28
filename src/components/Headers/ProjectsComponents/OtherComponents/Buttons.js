import React from 'react';
import PaintStudio from '../PaintStudio';
import LandingPage from '../LandingPage';
import SnakeGame from '../SnakeGame';

function Buttons(props) {
  const { onChange } = props;

  const handleClick = (newText) => {
    onChange(newText);
  }

  return (
    <div className="projects-list">
      <ul>
        <li><PaintStudio onChange={handleClick} /></li>
        <li><LandingPage onChange={handleClick} /></li>
        <li><SnakeGame onChange={handleClick} /></li>
      </ul>
    </div>
  );
}

export default Buttons;