
import React, { useState, useEffect, useContext } from 'react';
import "./Categories.scss"; 
import { Cartcontext } from '../Context/Context';
import { Fade } from "react-awesome-reveal"
import { Link } from 'react-router-dom';
export const mycontext = React.createContext()

export default function Categories() {
  let [datafetched,setdatafetched]=useState(false)
  let [products, setproducts] = useState([]);
  let [addedproduct,setaddedproduct]= useState(null)
  let [category, setcategory] = useState("");
  let [showmessage,setshowmsg]=useState(false)

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/category/${category}`
    if (category === "") {
      url = "https://fakestoreapi.com/products"
    }
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {setproducts(data)})
     
  }, [category])


  const handleAllCategory = () => { setcategory(""); setdatafetched(false) }
  const handleMenCategory = () => { setcategory("men's clothing"); setdatafetched(false)  }
  const handleWomenCategory = () => { setcategory("women's clothing"); setdatafetched(false)  }
  const handleJewelery = () => { setcategory("jewelery"); setdatafetched(false) }
  const handleElectronics = () => { setcategory("electronics"); setdatafetched(false)  }

  const globalstate=useContext(Cartcontext)
  const dispatch= globalstate.dispatch
  console.log(globalstate)

  return (
    <>
      <div className='categoriesbuttons'>
        <button onClick={handleAllCategory}>ALL</button>
        <button onClick={handleMenCategory}>Men's</button>
        <button onClick={handleWomenCategory}>Women's</button>
        <button onClick={handleJewelery}>Jewelery</button>
        <button onClick={handleElectronics}>Electronics</button>
      </div>
      <div className='categories'>
        {products.length==0 ? <h3>No Internet Connection</h3>: products.map(product =>
        <Fade delay={800}>
        
            <div className='products'>
            <Link style={{textDecoration:"none",color:"black"}} to={`/details/${product.id}`}>
            <h3 key={product.id}>{product.title}</h3>
            <img className='productimage' src={product.image} />
            <h3>Rs.{product.price * 80}</h3>
            </Link>
            <button className='addtocartbtn' onClick={() =>{
            dispatch({type:"ADD",payload:product}); setshowmsg(true)
            setaddedproduct(product)
            setTimeout(()=>{setshowmsg(false);
             setaddedproduct(null)},2000)}}>Add to Cart</button>
           
           {addedproduct && addedproduct.id === product.id && showmessage && <p className='popup'>Added to cart</p>}      
           
          </div>
          
          </Fade>
        )}
      </div>
      
</>
    
  )
}
