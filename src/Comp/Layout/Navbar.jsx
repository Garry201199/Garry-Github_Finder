import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {
  return (
    <>  
    <div className="navbar font-nunito shadow-lg bg-neutral">
      
  <div className="flex-none">
    <button className="btn btn-square ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>

  <div className="flex-1">
    <Link to='/' className="text-neutral-content btn  text-xl">
      <GitHubIcon sx={{marginRight:'5px'}} fontSize="large"/> 
       {title}</Link>
  </div>
  <Link to='/'>
  <div className="flex-none">
    <button className=" btn text-neutral-content ">
     Home
    </button>
  </div>
  </Link >
  <Link to='/about'>
  <div className="flex-none">
    <button className="btn ">
     About
    </button>
  </div>
  </Link >
</div>

</>
  )
}
Navbar.defaultProps={
  title:'Github Finder'
}
// Navbar.PropTypes  ={
//   title: PropTypes.string,
// }


export default Navbar
