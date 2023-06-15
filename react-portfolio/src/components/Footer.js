import React from 'react';
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import stack from "../images/stack.png"

export default function Footer() {

  return (
    <footer>
      
        <section className="contact" id = "contact">
        <a href = "https://www.linkedin.com/in/changclarence/">
          <img src={linkedin} alt="LinkedIn"/>
        </a>
        <a href = "https://github.com/hiclarence">
          <img src={github} alt="LinkedIn"/>
        </a>
        <a href = "https://stackexchange.com/users/28815545/clarence">
          <img src={stack} alt="Stack"/>
        </a>
        </section>
      
    </footer>
  );
}
