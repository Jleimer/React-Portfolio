import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header>
        <Nav> </Nav>
      </Header>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
