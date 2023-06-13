// import logo from './logo.svg';
import React from 'react'; 
import AboutMe from './components/aboutMe';
import Portfolio from './components/Porfolio';
import Contact from './components/contactMe';
import Resume from './components/Resume';
import './App.css';

export default function App() {
  return (
    <div>
      <head>
        <title>Clarence's Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="assets/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <header>
        <nav>
          <ul>
              <li><a href="#about">About Me</a></li> 
              {/* selected by default */}
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Resume</a></li>
          </ul>
        </nav>
      </header>
      <body>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </body>
      <footer>
        <section className="contact" id = "contact">
        <a href = "https://www.linkedin.com/in/changclarence/" class = "linkedin"><i class="fa-brands fa-linkedin"></i></a>
        <a href = "https://github.com/hiclarence" class = "github"><i class="fa-brands fa-github"></i></a>
        <a href = "https://stackexchange.com/users/28815545/clarence" class = "stackOverflow"><i class="fa-brands fa-stack-overflow"></i></a>
      </section>
    </footer>
    </div>
  );
}


