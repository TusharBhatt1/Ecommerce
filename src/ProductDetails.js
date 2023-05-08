import React, { useEffect, useState,useContext } from 'react'
import { useParams,Link } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Cartcontext } from './Context/Context';
import Navbar from './Components/Navbar';
import "./ProductDetails.scss"

export default function ProductDetails() {

    let {id}=useParams()
    let[msg,setmsg]=useState("")
    let [details,setdetails]=useState()
    const globalstate=useContext(Cartcontext)
    const dispatch= globalstate.dispatch
    console.log(id)

    useEffect(()=>{
        let url=`https://fakestoreapi.com/products/${id}`
        fetch(url).then(res=>res.json())
        .then(data=>setdetails(data))       
           },[id])
           console.log(details)

   let renderstar=(length)=>{
   let stars=[]
   for(let i=0;i<length;i++)
   {
    stars.push(<StarBorderIcon key={i}/>)
   }
   return stars
    }       
   
    return (
        <>
         <Navbar/>
         <Link to="/"><button className='backbtn' style={{position:"relative",top:"10vh",marginLeft:"1vw",border:"none"}}>Back</button></Link>
        <div className='details' style={{padding:"5%",width:"50vw",margin:"auto",display:"flex",
        flexDirection:"column",justifyContent:"center",textAlign:"center",fontFamily:"monospace",lineHeight:"3vh",letterSpacing:"2px"}}>
         
            <h3>{details?.title ? details.title : (<p>Nothing found</p>)}</h3>
            <img src={details?.image} height={"100vh"}width={"100vw"} style={{margin:"auto"}}/>
            <h4>{details?.description}</h4>
            <span>Rating:</span><span style={{color:"yellow"}}> {renderstar(details?.rating?.rate)}</span>
            <p>Price: Rs {details?.price ? details.price*80 : "Not available"}</p>
            <button style={{width:"100px",backgroundColor:"blue",color:"white",borderRadius:"20px",margin:"auto",
            padding:"10px",border:"none"}} 
            
            onClick={()=>{dispatch({type:"ADD",payload:details})
                          setTimeout(()=>{setmsg("")},1000) 
                          setmsg(<p className='Addedmsg'>Added</p>)}} 
             >Add To Cart</button>
             {msg}
        </div>
        </>
  )
}
