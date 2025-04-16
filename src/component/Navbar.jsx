import React, { useState } from 'react'
import {assets} from '../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu,setmenu]=useState("HOME");
  return (
    <div className='navbar'>

         <div className="logo">RESTAURANT</div>
         <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setmenu("HOME")} className={menu==="HOME"?"active":""}>HOME</Link>
            <a href='#explore-menu'  onClick={()=>setmenu("MENU")} className={menu==="MENU"?"active":""}>MENU</a>
            {/* <a href='#' onClick={()=>setmenu("SERVICE")} className={menu==="SERVICE"?"active":""}>SERVICE</a> */}
            <a href='about'  onClick={()=>setmenu("About")} className={menu==="About"?"active":""}>ABOUT</a>
         </ul>
         <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
         </div>
        </div>
  )
}

export default Navbar