import React from 'react'
import Face6Icon from '@mui/icons-material/Face6';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "./Navbar.scss"
import {Link} from "react-router-dom"

export default function Navbar() {


  return (
   
    <div className='navbar'>
    
    <Link to={"/"} href="">
    <Face6Icon  className='logo'/> 
    </Link>
  
    <div className='anchor'>
    <a>Homes</a>
    <a>About</a>
    <a>Contact</a>
    </div>
    
    <Link to="/cart" className='cart'>
    <p>Cart</p>
    <ShoppingCartIcon className="carticon"/>
    
    </Link>
    
    <InsertEmoticonIcon/>
    </div>
   
  )
}
