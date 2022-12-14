import React from 'react'
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import ln from "../assets/link.png"

const Footer = () => {
  return (
    <div className="footlogo">
      <a href="https://www.facebook.com/">
        <img src={fb} alt="fb" className="link" />
      </a>

      <a href="https://www.instagram.com/">
        <img src={insta} alt="insta" className="link"></img>
      </a>

      <a href="https://www.linkedin.com/">
        <img src={ln} alt="link" className="link"></img>
      </a>
    </div>
  );
}

export default Footer