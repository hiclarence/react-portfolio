import React from 'react';
import resume from "../assets/resume.pdf"

export default function Resume() {
  return (
    <div className="resume">
        <div classname="skillsTitle">
          <h2>My Skills</h2>
        </div>
        <div className="skillSection">
          <div className="skillset col_1">
            <ul>HTML/CSS</ul>
            <ul>Javascript</ul>
            <ul>Express</ul>
            <ul>Node</ul>
            <ul>React</ul>
          </div>
          <div className="skillset col_2">
            <ul>Handlebars</ul>
            <ul>SQL</ul>
            <ul>MongoDB</ul>
            <ul>MERN</ul>
            <ul>GraphQL</ul>  
          </div>
        </div>
        <a href={resume} download><button type="button">Download my Resume</button></a>
    </div>
  );
}
