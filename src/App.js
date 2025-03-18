import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StandardSearch from './pages/StandardSearch'
import NotFound from './pages/NotFound';
import Login from './components/Login/Login';
import LocationPage from './components/LocationPage/LocationPage';
import SignUp from './components/SignUp/SignUp';
import LocationDetails from './components/LocationDetails/LocationDetails';
import MyReservations from './components/Reservations/MyReservations';
import CreateListing from './pages/CreateListing';
import AdminDashboard from './pages/AdminDashboard';


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
            <Route path='/register' element={<SignUp />}/>
            <Route path='/all_locations' element={<LocationPage />} />
            <Route path='/location/:id' element={<LocationDetails />}/>
            <Route path='/listings' element={<AdminDashboard />} />
            <Route path='/creat_listing'element={<CreateListing />} />
            <Route path='/standard_search' element={<StandardSearch />} />
            <Route path='/my-reservations' element={<MyReservations />} />
            <Route path='/*' element={<NotFound />} />

          </Routes>
        </div>
    </Router>
   
  );
}

export default App;
