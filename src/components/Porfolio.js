import React from 'react';
import food from "../images/food.png";
import horiseon from "../images/horiseon.png";
import network from "../images/socialNetwork.png"
import pot from "../images/potIt.png";
import password from "../images/password.png";
import scheduler from "../images/scheduler.png";
import Card from "./Project"

export default function Portfolio() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className='container'>
      <section className = "first">
        <div className = "firstImage">
          <Card 
          cardTitle = "Prework"
          imageURL = {horiseon}
          imageAlt= "HTML and CSS work"
          cardDesc = "A marketing page created by HTML and CSS"
          githubLink = "https://hiclarence.github.io/prework-study-guide/"
          demoLink = "https://hiclarence.github.io/prework-study-guide/"
          />
        </div>
          <div className = "project">
            <Card
            cardTitle = "Social Network API"
            imageURL = {network}
            imageAlt= "API routes"
            cardDesc = "Leveraging Mongo DB to create a social network API"
            githubLink = "https://github.com/hiclarence/social_network_api"
            demoLink = "https://www.loom.com/share/484987bfa99741cfbf26c7665c1d96a7"
            />
          </div>
          <div className = "project">
            <Card
            cardTitle = "Food Will Beer Us Apart"
            imageURL = {food}
            imageAlt= "Food Will Beer Us Apart"
            cardDesc = "Using 3rd party API's to create food and beer pairings"
            githubLink = "https://github.com/stbuiemory/FoodWillBeerUsApart"
            demoLink = "https://stbuiemory.github.io/FoodWillBeerUsApart/page_searchresults.html"
            />
          </div>
          </section>
          <section className="work">          
          <div className = "project">
          <Card
            cardTitle = "Pot it like it's hot"
            imageURL = {pot}
            imageAlt= "Pot it like it's hot"
            cardDesc = "A full stack application to curate plants"
            githubLink = "https://github.com/stbuiemory/2kPerDay"
            demoLink = "https://pilih.herokuapp.com/"
            />
          </div>
          <div className = "project">
          <Card
            cardTitle = "Password Checker"
            imageURL = {password}
            imageAlt= "Password Checker"
            cardDesc = "A password generator for special parameters"
            githubLink = "https://github.com/hiclarence/password_checker"
            demoLink = "https://hiclarence.github.io/password-checker/"
            />
          </div>
          <div className = "project">
          <Card
            cardTitle = "Work Day Scheduler"
            imageURL = {scheduler}
            imageAlt= "scheduler"
            cardDesc = "A work-day calendar which visualizes current hour"
            githubLink = "https://github.com/hiclarence/work-day-scheduler"
            demoLink = "https://hiclarence.github.io/work-day-scheduler/"
            /> 
          </div>
      </section>
    </div>
  );
}
