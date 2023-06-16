import React from 'react';
import resume from "../assets/resume.pdf"

export default function Resume() {
  return (
    <div className="resume">
        <div>
          <h2>My Skills</h2>
        </div>
        <div>
          <ul>My Skills</ul>
        </div>
        <a href={resume} download><button type="button">Download my Resume</button></a>
    </div>
  );
}
