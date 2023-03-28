/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Home from './Headers/Home';
import Contact from './Headers/Contact';
import Buttons from './Headers/ProjectsComponents/OtherComponents/Buttons';
import './Portfolio.css';

function Portfolio() {
  
  const [text, setText] = useState(
    <div>
      <h1>Welcome</h1>
      <p>My name is Jon Anderson and I am a front-end web developer who loves to learn all things technology. 
        This site consists of just some of the projects I have created over the years. 
        If you want to talk about anything tech, space, where IS waldo?? Feel free to reach out. 
        I always love to learn more about people and the world.</p>
    </div>
  );
  const [showButtons, setShowButtons] = useState(true);

  const handleChange = (newText, showButtons) => {
    setText(newText);
    setShowButtons(showButtons);
  }

  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <ul>
            <li><Home onChange={handleChange} /></li>
            <li><Contact onChange={handleChange} /></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Welcome section */}
        <div className="welcome-content">
          {text}
        </div>
        {/* Buttons section */}
        {showButtons && (
          <div className="buttons-content">
            <Buttons onChange={handleChange}/>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className='footerStyle'>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;