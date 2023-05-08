import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import one from "../Images/picone.jpg"
import two from "../Images/2.jpg"
import three from "../Images/3.jpg"
import four from "../Images/4.jpg"
import AwesomeSlider from 'react-awesome-slider'
import withAutoPlay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"

export default function Banner() {

  const Autoplay=withAutoPlay(AwesomeSlider)

  return (
  
    <Autoplay cancelOnInteraction={true} play={true}  style={{zIndex:1,height:"80vh"}}>
    <img height={"10px"} data-src={one}></img>
    <img height={"20px"} data-src={two}></img>
    <img height={"20px"} data-src={three}></img>
    <img height={"20px"} data-src={four}></img>
    </Autoplay>
   
     )
}
