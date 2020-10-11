import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/Nav/pages/about'
import Contact from './components/Nav/pages/contact'
import Header from './components/Header';
import Project from './components/Project';
//mport Footer from './components/Footer';



function App() {
   // Using useState, set the default value for currentPage to 'Home'
   const [currentPage, handlePageChange] = useState('Home');

   // The renderPage method uses a switch statement to render the appropriate current page
   const renderPage = () => {
     switch (currentPage) {
       case 'About':
         return <About />;
       case 'Portfolio':
         return <Project />;
      //  case 'Resume':
      //    return <Resume />;
       case 'Contact':
         return <Contact />;
       default:
         return <About />;
     }
   };
 
  return (
    
    
    <div>
     <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
     
      <main>
        {renderPage()}
      </main>
     
    </div>
  );
}

export default App;
