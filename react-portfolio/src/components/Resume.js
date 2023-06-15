import React from 'react';
import resume from "../assets/resume.pdf"

export default function Resume() {
  return (
    <div className="resume">
        <button href={resume} download="Clarence's CV" type="button">Download my Resume</button>
    </div>
  );
}
