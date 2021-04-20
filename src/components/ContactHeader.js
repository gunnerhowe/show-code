import React from 'react';
import '../App.css';
import './ContactHeader.css';

function ContactHeader() {
  return (
    <div className='contactheader-container'>
      <video src='/videos/video-4.mov' autoPlay loop muted />
      <h1>GUNNER HOWE</h1>
      <p>Email: gunnerlevihowe@gmail.com</p>
      <p>Phone: 501-288-2488</p>
      <br></br>
      <button><a href="mailto:gunnerlevihowe@gmail.com">Email</a></button>
    </div>
  );
}

export default ContactHeader;