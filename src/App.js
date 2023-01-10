import React from 'react';
import './App.css';
import {Header} from './layout/Header.jsx';
import {Footer} from './layout/Footer.jsx';
import {Main} from './layout/Main.jsx';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
