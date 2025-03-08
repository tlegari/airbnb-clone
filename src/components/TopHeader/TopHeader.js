import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './TopHeader.css'

const TopHeader = () => {
  return (
    <div className='header'>

        <div className='logo-section'>
          <img className=' logo'src='https://banner2.cleanpng.com/20180907/jql/kisspng-logo-airbnb-vector-graphics-brand-portable-network-vector-logo-supply-page-17-1713943170642.webp' alt='Logo'/>
        </div>
        <div className='header-center'>
            <input type='text' />
            <SearchIcon className='search-icon'/>
        </div>
        <div className='header-right'>
            <div className='host-section'>
              <p>Become a host</p>
              <LanguageIcon />
            </div>
            <div className='account-icon'>
              <MenuIcon />
              <AccountCircleIcon />
            </div>
        </div>
    
    </div>
  )
}

export default TopHeader