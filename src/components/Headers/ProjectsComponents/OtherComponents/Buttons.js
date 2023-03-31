import React from 'react';
import PaintStudio from '../PaintStudio';
import LandingPage from '../LandingPage';
import SnakeGame from '../SnakeGame';
import { Button, Stack } from '@mui/material';

function Buttons(props) {
  const { onChange } = props;

  const handleClick = (newText) => {
    onChange(newText);
  }

  return (
    <div class='style'>
      <Stack spacing={5} direction="row">
        <div>
        <Button variant='contained'><PaintStudio onChange={handleClick} /></Button>
        </div>
        <div>
        <Button variant='contained'><LandingPage onChange={handleClick} /></Button>
        </div>
        <div>
        <Button variant='contained'><SnakeGame onChange={handleClick} /></Button> 
        </div>
      </Stack>
    </div>
      
  );
}

export default Buttons;