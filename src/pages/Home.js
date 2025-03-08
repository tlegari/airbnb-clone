import React from 'react';
import './Home.css';
import Banner from '../components/HeroBanner/Banner';
import HomePageHeader from '../components/TopHeader/HomePageHeader';
import SearchNavbar from '../components/TopHeader/SearchNavbar';
import CityCards from '../components/InspirationContent/CityCards';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <div className='black-section'>
       <HomePageHeader />
       <SearchNavbar />
       <Banner />
      </div>
      <div className='white-section'>
       <CityCards />
      </div> 
      <div className='grey-section'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;