import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Listing from './pages/Listing';
import StandardSearch from './pages/StandardSearch'
import LauxeSearch from './pages/LauxeSearch';
import NotFound from './pages/NotFound';
import Login from './components/Login/Login';
import LocationPage from './components/LocationPage/LocationPage';


function App() {
  return (
    //Our actual Router
    <Router>
        <div>
          {/**Collection of Routes */}
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />} />

            {/**Individual Route */}
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/all_locations' element={<LocationPage />} />
            <Route path='/listing' element={<Listing />} />
            <Route path='/standard_search' element={<StandardSearch />} />
            <Route path='/lauxe_search' element={<LauxeSearch />} />
            <Route path='/*' element={<NotFound />} />

          </Routes>
        </div>
    </Router>
   
  );
}

export default App;
