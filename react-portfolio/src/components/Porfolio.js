import React from 'react';


export default function Portfolio() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className='container'>
      <section className = "first">
        <div className = "firstImage">
          <h4>Prework</h4>
          <a href="https://hiclarence.github.io/prework-study-guide/"><img src="assets/prework.png" alt="prework module"/></a>
        </div>
      </section>
      <section className="work">
          <div className = "project">
            <h4>Horiseon Marketing</h4>
            <a href="https://hiclarence.github.io/module-1-challenge/"><img src="assets/horiseon.png" alt="challenge 1 module"/></a>
          </div>
          <div className = "project">
            <h4>Food will Beer Us Apart</h4>
            <a href="https://stbuiemory.github.io/FoodWillBeerUsApart/page_searchresults.html"><img src="assets/food.png" alt="class project 1"/></a>
          </div>
          <div className = "project">
            <h4>Pot it like it's hot</h4>
            <a href="https://github.com/stbuiemory/2kPerDay"><img src="assets/Pot It Like It's Hot .png" alt="class project 2"/></a>
          </div>
          <div className = "project">
            <h4>PWA Text Editor</h4>
            <a href="https://stbuiemory.github.io/FoodWillBeerUsApart/page_searchresults.html"><img src="assets/food.png" alt="class project 1"/></a>
          </div>
          <div className = "project">
            <h4>NoSQL API</h4>
            <a href="https://github.com/stbuiemory/2kPerDay"><img src="assets/Pot It Like It's Hot .png" alt="class project 2"/></a>
          </div>
      </section>
    </div>
  );
}
