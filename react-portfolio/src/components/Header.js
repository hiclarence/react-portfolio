import React from 'react';

export default function Header() {

  return (
    <div classname="container">
        <header>
            <title>Clarence's Portfolio</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="assets/style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </header> 
        <nav>
          <ul>
              <li><a href="#about">About Me</a></li> 
              {/* selected by default */}
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Resume</a></li>
          </ul>
        </nav>
    </div>
  );
}
