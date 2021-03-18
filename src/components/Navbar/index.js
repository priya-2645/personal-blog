import React from 'react'
import {NavLink}from 'react-router-dom'
import './style.css'
import search from './../../assets/icons/search.png'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  const submitSearch=(e)=>{
    e.preventDefault();
    alert("Searched");
  }
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">AboutUs</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/contact-us">ContactUs</NavLink></li>
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}>
          <input type="text" className="searchInput" placeholder="Search"/>
          <img src={search} alt="Search"/>
          </form>
        </div>
    </div>
   )

 }

export default Navbar