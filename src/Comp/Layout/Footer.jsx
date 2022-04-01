import React from 'react'
import stark from '../../Img/stark.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
const Footer = () => {
    const footerYear = new Date()
  return (
    <div>
    <footer className="footer font-nunito footer-center p-10 bg-purple-100  rounded">
  <div className="grid grid-flow-col gap-4">
    <Link to='/about' className="link  text-purple-900 link-hover">
      <Typography>About us</Typography>
      </Link> 
    <Link to='/contact' className="link text-purple-900 link-hover"> <Typography>Contact  Us</Typography></Link> 
    <Link to='/*' className="link text-purple-900 link-hover">
      <Typography>PageNotFound(Test)</Typography>
      </Link> 
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
 
        <TwitterIcon htmlColor='#1da1f2' fontSize='large'/>
        <YouTubeIcon htmlColor='#ff0000' fontSize='large'/>
        <FacebookIcon  htmlColor='#1877f2' fontSize='large'/>  
    </div>
  </div> 
  <div>
  <div className="flex truncate">
        <div className="flex-none  truncate  text-purple-900  mt-3">
        <Typography variant='h6' noWrap  >Copyright© {footerYear.getFullYear()} - All right reserved by Stark Industries Ltd </Typography>
        </div>
        <div className="flex-1">
            <Avatar sx={{ width: 56, height: 56 }} alt="stark" src={stark} />
        </div>
      </div>
    
  </div>
</footer>
      
    </div>
  )
}

export default Footer
