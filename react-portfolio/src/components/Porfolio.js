import React from 'react';
import food from "../images/food.png";
import horiseon from "../images/horiseon.png";
import pot from "../images/potIt.png";
import prework from "../images/prework.png";

export default function Portfolio() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className='container'>
      <section className = "first">
        <div className = "firstImage">
          <h4>Prework</h4>
          <a href="https://hiclarence.github.io/prework-study-guide/"><img src={prework} alt="prework module"/></a>
        </div>
      </section>
      <section className="work">
          <div className = "project">
            <h4>Horiseon Marketing</h4>
            <a href="https://hiclarence.github.io/module-1-challenge/"><img src={horiseon} alt="challenge 1 module"/></a>
          </div>
          <div className = "project">
            <h4>Food will Beer Us Apart</h4>
            <a href="https://stbuiemory.github.io/FoodWillBeerUsApart/page_searchresults.html"><img src={food} alt="class project 1"/></a>
          </div>
          <div className = "project">
            <h4>Pot it like it's hot</h4>
            <a href="https://github.com/stbuiemory/2kPerDay"><img src={pot} alt="class project 2"/></a>
          </div>
          <div className = "project">
            <h4>PWA Text Editor</h4>
            <a href="https://stbuiemory.github.io/FoodWillBeerUsApart/page_searchresults.html"><img src={food} alt="class project 1"/></a>
          </div>
          <div className = "project">
            <h4>NoSQL API</h4>
            <a href="https://github.com/stbuiemory/2kPerDay"><img src={food} alt="class project 2"/></a>
          </div>
      </section>
    </div>
  );
}
