import React, { CSSProperties } from 'react';
import Header from '../header/Header';

const style: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '1.5rem',
  justifyContent: 'center'
}

const NavBar = () => {

  return (
    <div style={style}>
      <a>Music | </a>
      <a>Computing | </a>
      <a>Writing | </a>
      <a>Photos | </a>
      <a>Experiments</a>
    </div>
  )

}

export default NavBar;