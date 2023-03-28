
import React from 'react';
import './Contact.css'

function Contact(props) {
  const handleClick = () => {
    props.onChange(
      <div className="contact-form">
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-field">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>
    </div>
  );
  }
  
  return (

  <div>
    <a onClick={handleClick}>Contact</a>
  </div>
  );
}

export default Contact;