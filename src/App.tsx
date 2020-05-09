import React, { CSSProperties } from 'react';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Contact from './components/contact/Contact';

const style: CSSProperties = {
  backgroundColor: '#ffd59a',
  padding: 10,
  flexDirection: 'column',
  flexWrap: 'wrap'
}

const rowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const contactStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const App = () => {
  return (
    <div style={style}>
      <div style={contactStyle}> 
        <Contact />
      </div>
      <div style={rowStyle} data-testid='header'>
        <Header />
      </div>
      <br/>
      <div style={rowStyle}>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
