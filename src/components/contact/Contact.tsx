import React, { CSSProperties } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBandcamp } from 'react-icons/fa'

const style: CSSProperties = {
  fontSize: '1.5rem',
}

const rowStyle: CSSProperties = {
  marginRight: 8
}

const Contact = () => {

  return (
    <div style={style}>
      <a href='https://bandcamp.com/tagnew' target='_blank'>
        <FaBandcamp style={rowStyle} size={30}/>
      </a>
      <a href='https://twitter.com/TylerAgnew' target='_blank'>
        <FaTwitter style={rowStyle} size={30}/>
      </a>
      <a href='https://www.facebook.com/tyler.agnew.10' target='_blank'>
        <FaFacebook style={rowStyle} size={30}/>
      </a>
      <a href='https://www.instagram.com/tagnuisance/' target='_blank'>
        <FaInstagram style={rowStyle} size={30}/>
      </a>
      <a href='https://www.linkedin.com/in/tyler-agnew-0a529427/' target='_blank'>
        <FaLinkedin style={rowStyle} size={30}/>
      </a>
    </div>
  )

}

export default Contact;