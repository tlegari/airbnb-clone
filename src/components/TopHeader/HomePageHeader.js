import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './HomePageHeader.css'
import { Link } from 'react-router-dom';

const HomePageHeader = () => {
  return (
    <div className='header'>
        <div className='logo-section'>
          <img className='logo'src='https://i.pinimg.com/736x/a3/ae/b1/a3aeb11137ac5da4915ff39d61a83130.jpg' alt='Logo'/>
        </div>

        <div className='middle-section'>
          <Link to='/' >Places to stay</Link>
          <Link to='/' >Experiences</Link>
          <Link to='/'>Onlice Experiences</Link>    
        </div>

        <div className='header-right'>
            <div className='host-section'>
              <p>Become a host</p>
              <LanguageIcon />
            </div>

            <Link to='/login'>
            <div className='account-icon'>
              <MenuIcon  />
              <AccountCircleIcon className='account_icon' />
            </div>
            </Link>
        </div>
    
    </div>
  )
}

export default HomePageHeader