// import logo from './logo.svg';
import React from 'react'; 
import AboutMe from './components/aboutMe';
import Portfolio from './components/Porfolio';
import Contact from './components/contactMe';
import Resume from './components/Resume';
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css';

export default function App() {
  return (
    <div>
      <Header/>
      <body>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </body>
      <Footer/>
    </div>
  );
}


// navigation - header
// container (aboutMe, portfolio, contactMe all switch around)
// footer


