import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    
    
    try {
      const response = await dispatch(loginUser(userData)).unwrap();
      alert("Login successful!");
      if (response) navigate("/"); // Redirect to Home Page
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png?20230603231949"
            alt="Airbnb logo"
            className="login-image"
          />
        </Link>
      </div>

      <div className="login">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <h4>Email</h4>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password">
              <h4>Forgot Password?</h4>
            </div>
            <div className="button">
              <button type="submit" className="signIn-button" disabled={loading}>
                {loading ? "Logging in..." : "Login"} 
              </button>
            </div> 
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
