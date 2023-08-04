import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from './../SearchBar/SearchBar';
import './navbar.css'

export default function Navbar(props){
    const { onSearch }=props;

    return(
      <div className="navbar">
        
         <div className="buscador"><SearchBar onSearch={onSearch}/></div>   
        <Link to='/home' ><a c href=""><img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="rym" className='logo'/></a></Link>
            
            <div className="links">
      
      <Link to="/login"><a  href="#">LOGIN</a></Link>
        <a  href="">ABOUT</a>
        <Link to='/details'><a href="">DETAILS</a></Link>
        <Link to='/favorites'><a href="" >FAVORITOS</a></Link>

      
    </div>
        
        </div>


        

      
    );
}