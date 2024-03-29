import React, {useState} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import AboutMe from './aboutMe';
import Portfolio from './Porfolio';
import Contact from './contactMe';
import Resume from './Resume';

export default function MainComponent() {

    const [currentPage, setCurrentPage] = useState('AboutMe');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact Me') {
        return <Contact />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      };
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
}