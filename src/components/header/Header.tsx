import React, { CSSProperties } from 'react';

const style: CSSProperties = {
  fontSize: '4rem',
  fontFamily: 'monospace',
}

const Header = () => {
  return (
    <div style={style}>
      Tyler Agnew
    </div>
  )
}

export default Header;