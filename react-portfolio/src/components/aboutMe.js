import React from 'react';
import propic from '../images/clarence.png'

export default function AboutMe() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    
    <div className="container">
      <section className="about">
        <img src={propic} alt="Clarence profile" width="200" height="200"/>
        <section className = "intro">
          <div className = "headline"><h1>Hey, I'm Clarence</h1> 
          </div>
          <div className = "info"><p> I'm a UX designer learning how to full stack code! I'm an Atlanta transplant in the Bay Area.</p>
          </div>
        </section>
      </section>
    </div>
  );
}
