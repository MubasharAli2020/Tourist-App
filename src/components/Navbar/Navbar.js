import React from 'react';
import './Navbar.css';
import {  Link,NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import images from './images.png' // relative path to image 
function Navbar() {
    return (
    <div className='navbar'>
   <nav class="navbar navbar-expand-lg navbar-light container">
  <Link class="navbar-brand " to="/"><img src={images} alt="sorry"/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav ">
      <li class="nav-item active">
  <Link  to="/" class="nav-link px-4">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link  to="/about" class="nav-link px-4">About</Link>
      </li>
      <li class="nav-item ">
        <Link to="/contact" class="nav-link px-4">Contact</Link>
      </li>
    </ul>
  </div>

</nav>

    </ div>
  );
}
export default Navbar;
