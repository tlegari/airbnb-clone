import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './HomePageHeader.css'
import { Link } from 'react-router-dom';

const HomePageHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [selectedOption, setSelectedOption] = useState('');
  const userLoggedIn = JSON.parse(localStorage.getItem("userInfo"));

  //Handling option selection
  const handleSelectionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption('');

    if(selectedValue === 'login') {
      navigate('/login');
    }else if (selectedValue === 'signup') {
      navigate('/register');
    }else if (selectedValue === 'logout') {
      dispatch(logout());
      navigate('/');
    }
  };

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

            
            <div className='account-icon account-dropdown'>
              <MenuIcon  />
              <AccountCircleIcon className='account_icon' />

              {/** Dropdown select menu */}
              <select 
                className='dropdown-select' 
                value={selectedOption} 
                onChange={handleSelectionChange}
              >
                <option value=''></option>
                {user ? (
                  <>
                    <option value='logout'>Logout</option>
                  </>
                ) : (
                  <>
                   <option value='login'>Login</option>
                   <option value='signup'>Sign Up</option>
                  </>
                )}
              </select>
            </div> 
        </div>
    </div>
  )
}

export default HomePageHeader