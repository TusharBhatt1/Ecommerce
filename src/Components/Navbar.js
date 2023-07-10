import React, { useContext } from 'react'
import Face6Icon from '@mui/icons-material/Face6';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "./Navbar.scss"
import {Link} from "react-router-dom"
import { Cartcontext } from '../Context/Context';

export default function Navbar() {

let cart= useContext(Cartcontext)

  return (
   
    <div className='navbar'>
    
    <Link to={"/"} href="">
    <Face6Icon  className='logo'/> 
    </Link>
  
   
    <p className='s-remove'>Home</p>
    <p className='s-remove'>Contact</p>
   
    
    <Link to="/cart" className='cart'>
    <p className='cart'>Cart</p>
    <ShoppingCartIcon className="carticon"/>
    {cart.state.length!==0 && <p>({cart.state.length})</p>}
    </Link>
    
  
   
   </div>
   
  )
}
