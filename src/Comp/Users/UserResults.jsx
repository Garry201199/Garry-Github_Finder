import { WifiLoader } from "react-awesome-loaders";
import React, { useContext} from 'react'
import UserItem from "./UserItem";
import GithubContext from '../../Context/Github/GithubContext'

const UserResults = () => {
  const {users , loading} = useContext(GithubContext)
  // useEffect(()=>{
  //   setTimeout(() => {
  //      fetchApi()
  //   }, 2500);
  // },[])
  
  if(!loading){
    return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3
     md:grid-cols-2'> 
      {users &&  users.slice(0,15).map((i, key) =>(
        <UserItem i={i}  key={key}/>
      )) }
      
    </div>
  )}
  else{
    return(
    <div className="flex items-center justify-center "><WifiLoader
      background={"transparent"}
      desktopSize={"150px"}
      mobileSize={"150px"}
      text={"Loading...."}
      backColor="#fff"
      frontColor="#db2777"
    /></div>
      
    )
    
  }
}

export default UserResults
