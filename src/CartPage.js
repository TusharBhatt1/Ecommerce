import React, { useContext, useEffect, useState } from 'react'
import "./CartPage.scss"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Cartcontext } from './Context/Context'
import { Link } from 'react-router-dom';



export let itemslengthcontext=React.createContext(0)
export default function CartPage() {

 let [totalprice,settotalprice]=useState(0)
 let [itemslength,setitemslength]=useState(0)

  const globalstate=useContext(Cartcontext)

  const state=globalstate.state
  const dispatch=globalstate.dispatch
  
 const handleremovebtn=(id)=>{
  dispatch({type:"REMOVE",payload:id})
  
 }
 useEffect(()=>{
  let prices= state.reduce((prev,item)=>{
   return prev+item.price
  },0)
  setitemslength(state.length)
  settotalprice(prices)
   },[state])
  
  
  
  return (
   <itemslengthcontext.Provider value={itemslength}>
  
    <div className='maincontainer'>
    
    <Link to="/"><button className='backbtn'>Back</button></Link>
    
      { state.length===0 ?<h3>Your Cart Is Empty</h3>: state.map((item)=>
          
          <div className='allcartitems'>
         
            <div className='col1'>
              <h4>{item.title}</h4>
              <img src={item.image} height={"50vh"}/>
            </div>
            <div className='col2'>
              <p>Rs. {item.price*80}</p>
            </div>
            <div className='removebtn'>
              <RemoveCircleOutlineIcon style={{color:"red"}} onClick={()=>handleremovebtn(item.id)}/>
            </div>
            
          </div>
         
     
          
      )}
   
      
    {totalprice!==0 &&  <h3 className='totalprice'>Total Price: Rs {totalprice*80}</h3>}
     
      
      </div>
      </itemslengthcontext.Provider>
      

  )
}
