import React from 'react'
import './scss/main.scss'
import Header from './components/layout/Header/Header'
import Introsection from './components/layout/Introsection/Introsection';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Introsection />
    </React.Fragment>
  );
}

export default App;
