import React from 'react'
import "./Footer.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function Footer() {

const openemail=()=>{
    window.open("mailto:tusharbhatt0135@gmail.com")
}
const openlinkedin=()=>{
    window.open("https://www.linkedin.com/in/tushar-bhatt-59b64623b")
}
 return(
      <div className='footer'>
      <div className='column1'>
      <h3>Available on   </h3>
      <AppleIcon  style={{height:"10vh",width:"10vw"}}/>
      <AndroidIcon style={{height:"10pvh",width:"10vw"}}/>
      </div>
      <div className='column2'>
       

        <div className='section1'>
        <h2>Contact Me</h2>
            <div className='contactdetails'>
            
            <div className='email' onClick={openemail}>
            <MailOutlineIcon/>
            <h3>tusharbhatt0135</h3>
            </div>
            <div className='linkedin' onClick={openlinkedin}>
            <LinkedInIcon/>
            <h3>Tushar Bhatt</h3>
            </div>
            <div className='call'>
                <CallIcon/>
                <h3>+917617446649</h3>
            </div>
            </div>
            
        </div>
        
        </div>
        <div className='column3'>
        
        <div className='section2'>
        <div className='icons'>
        <CheckCircleOutlineIcon style={{height:"10vh",width:"10vw"}}/>
        <LocalShippingIcon style={{height:"10vh",width:"10vw"}}/>
        </div>
       
            <h4>100% ORIGINAL guarantee</h4>
            <h4>Fast Delivery Across India</h4>
            
        </div>
        </div>
     </div>
   
     )}
