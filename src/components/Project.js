import React from 'react';


export default function Card (props) {
  const { imageURL, imageAlt, cardTitle, cardDesc, githubLink, demoLink } = props;
  return (
    
    <div className="container">
      <section className="cardImage">
        <h4 className="cardTitle">{cardTitle}</h4>
        <a href={demoLink}><img src={imageURL} alt={imageAlt}/></a>
      </section>
      <div className="cardDescription">
        <p>{cardDesc}</p>
        <a href={githubLink}>View Github</a>
      </div>
    </div>
  );
}
