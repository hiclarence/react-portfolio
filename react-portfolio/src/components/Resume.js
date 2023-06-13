import React from 'react';

export default function Resume() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div classname="container">
      <section className = "resume">
        <button href="/components/Clarence Chang UX Design.pdf" download="proposed_file_name" type="button">Download my Resume</button>
      </section>
    </div>
  );
}
