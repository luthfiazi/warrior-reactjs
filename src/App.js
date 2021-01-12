import React from 'react';
import './App.css';
// import './owl.css';

import Content from './components/Content';
import Foot from './components/Foot';
import Header from './components/Header';
import Jumbo from './components/Jumbo';


function App() {
  return (
    <div>
      <Header />
      <Jumbo />
      <Content />
      <Foot />
    </div>
  );
}

export default App;
