import React from 'react';
import { useState } from 'react';
import NavButton from './NavButton';
import Home from '../../pages/Home';
import '../../stylesheet.css';

function Navbar() {
  return (
    <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list-item'><NavButton text='Home' to='#home' icon='icon-home'/>{/*Change dir*/}</li>
          <li className='nav-list-item'><NavButton text='Products' to='#products' icon='icon-products'/></li>
          <li className='nav-list-item'><NavButton text='About Us' to='#about_us'icon='icon-about_us'/></li>
          <li className='nav-list-item'><NavButton text='FAQ' to='#faq' icon='icon-faq'/></li>
          <li className='nav-list-item'><NavButton text='Contact' to='#contact' icon='icon-contact'/></li>
        </ul>
        <img src={require('../../images/logo/keycap.png')} alt='' className='nav-logo' href="/"/>
    </nav>
  )
}

export default Navbar
 
//Logo
//Nav buttons
