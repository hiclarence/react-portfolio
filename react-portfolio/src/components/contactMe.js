import React from 'react';

export default function Contact() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <section className="contactMe">
        <h2>Contact Me</h2>
          <form>
            <label for="fname">Name:</label><br/>
            <input type="text" id="fname"/><br/>
            <label for="lname">Email Address</label><br/>
            <input type="text" id="email"/><br/>
            <label for="lname">Message</label><br/>
            <input type="text" id="message"/><br/>
          </form> 
      </section>
    </div>
  );
}
