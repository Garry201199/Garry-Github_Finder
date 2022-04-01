import React from 'react'
import ReposItem from './ReposItem'


const ReposList = ({repos}) => {
  return (
    <div>
      <div className='rounded-lg shadow-lg mb-5 card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl font-nunito my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {repos.slice(0,10).map((i, key) => (
          <ReposItem key={key} i={i}/>
        ))}
      </div>
    </div>
       
    </div>
  )
}

export default ReposList
