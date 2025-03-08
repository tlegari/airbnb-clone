import React, { useState } from 'react'
import  Button  from '@mui/material/Button'
import './Banner.css'
import Search from '../../pages/Search'


const Banner = () => {

    const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>
       {/**
        * <div className='banner_search'>
          {showSearch && <Search/>}
          <Button 
            onClick={() => setShowSearch(!showSearch)}
            className='banner_searchButton'
            variant='outlined'
         >
            {showSearch? 'Hide' : 'Search Dates'}
         </Button>
        </div>
        */} 
        <div className='banner_info'>
          <h1>Not sure where to go? Perfect.</h1>
          <Button variant='outlined'>I'm flexible</Button>
        </div>
    </div>
  )
}

export default Banner