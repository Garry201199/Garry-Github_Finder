import React from "react";
import { Avatar, Typography } from "@mui/material";
import aboutImg from '../../Img/about.png'
import stark from '../../Img/stark.png'

const About = () => {
  return (
    
      <div className="flex">
  <div className="flex-1  m-8">
    <div className="flex gap-2 flex-col justify-center items-center ">
      <Typography variant="h6">About this Project</Typography>
      <Typography className="text-red-500 font-bold" variant="h4">GITHUB FINDER</Typography>
      <div className="flex">
        <div className="flex-1 mt-2">
        <Typography variant="h6">This project is developed by © Stark Industries  </Typography>
        </div>
        <div className="flex-none">
            <Avatar sx={{ width: 56, height: 56 }} alt="stark" src={stark} />
        </div>
      </div>
      <Typography variant="h6"> Version :-
       <span className="text-gray-100 badge badge-neutral badge-lg"> 1.0.0</span></Typography>
  </div>
  
  </div>

  <div className="flex-1 ">
  <div className="carousel-item">
    <img src={aboutImg} alt="Burger" />
  </div> 
  </div>
</div>
      
      
    
  );
};

export default About;
