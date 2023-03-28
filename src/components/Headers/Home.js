
/* eslint-disable no-undef */
import React from 'react';
import Buttons from './ProjectsComponents/OtherComponents/Buttons';

function Home(props) {
  const { onChange } = props;

  const handleClick = () => {
    props.onChange(
    <div>
    <h1>Welcome</h1>
      <p>
        My name is Jon Anderson and I am a front-end web developer who loves to learn all things technology. 
        This site consists of just some of the projects I have created over the years. 
        If you want to talk about anything tech, space, where IS waldo?? Feel free to reach out. 
        I always love to learn more about people and the world.
      </p>
      <Buttons onChange={onChange} />
    </div>

    );
  }

  
  return (

  <div>
    <a onClick={handleClick}>Home</a>
  </div>
  
  );
}

export default Home;