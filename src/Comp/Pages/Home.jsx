
import React from 'react'
import UserResults from '../Users/UserResults'
import {Typography} from '@mui/material'
import UserSearch from '../Users/UserSearch'

const Home = () => {
  return (
    <div className='container  justify-center  m-9'>
     
        {/* search comp */}

        <UserSearch/>
        <UserResults/>
      
    </div>
  )
}

export default Home
