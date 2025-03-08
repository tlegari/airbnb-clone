import React from 'react';
import './CityCards.css';

const cities = [
  { name: "Sandton City Hotel", distance: "53 km away", image: "https://a0.muscache.com/im/pictures/50436535/e6fc3885_original.jpg?im_w=1200&im_format=avif" },
  { name: "Cape Town Beach", distance: "120 km away", image: "https://a0.muscache.com/im/pictures/miso/Hosting-53148492/original/d3441ceb-d886-414a-b6b3-a1a73b7e5232.jpeg?im_w=1200&im_format=avif" },
  { name: "Durban Seaside", distance: "450 km away", image: "https://a0.muscache.com/im/pictures/bad70543-c281-4d7c-aa61-32bc5532c237.jpg?im_w=1200&im_format=avif" },
  { name: "Johannesburg Skyline", distance: "30 km away", image: "https://a0.muscache.com/im/pictures/miso/Hosting-969432630635768034/original/4e1dd855-9040-4e5a-a259-c5e8d6fa4f65.jpeg?im_w=1200&im_format=avif" }
];

const CityCards = () => {
  return (
    <div className="main-container">
      <h1>Inspiration for your next trip</h1>
      <div className="city-container">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="city-info">
              <h2>{city.name}</h2>
              <p>{city.distance}</p>
            </div>
          </div>
        ))}
      </div>
     <div className="discover-container">
      <h1>Discover Airbnb Experiences</h1>
      <div className="discover-cards">
        <div className="discover-card" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-120627-media_library/original/0701980f-a94f-41b7-8ea0-6355d6c6bd4d.jpeg?im_w=320&im_format=avif')" }}>
          <div className="discover-content">
            <h2>Things to do on your trip</h2>
            <button>Experiences</button>
          </div>
        </div>
        <div className="discover-card" style={{ backgroundImage: "url('https://media.istockphoto.com/id/961870586/photo/african-american-man-baking-cookies-at-home-kitchen.jpg?s=612x612&w=0&k=20&c=nlBfB3dZ2Xm8s8t_jGnZArUMO8QPGNiLG1qwmrJVi8A=')" }}>
          <div className="discover-content">
            <h2>Things to do from home</h2>
            <button>Online Experiences</button>
          </div>
        </div>
      </div>
     </div>
     <div className='gift-card-container'>
        <div className='gift-card-content'>
           <h1>Shop Airbnb gift cards</h1>
           <button>Learn more</button>
        </div>
        <div className='gift-card-image'>
           <img alt='gift-card-image'src='https://s3-alpha-sig.figma.com/img/43b8/8762/e0a70df6eb554b492d0b7d2633a1ecb1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f6Tpd3YvYebpQojss3xSIhEJBd1~170wZwqn5Ro1ZxsTZEpyQcY7LbaMAmrGtRipwavzNBBRUCZk~AfZXsySfUTKQ123AZ1SN3SF-efyEz~lnvIxM7NzjuHaxoD5~yT-Acka6HGOGfTpB6R-c-C-s7mEsiT6cSmFZ0cbJFmxSV6NW7qtKuEzjvvKhX9GeQFv2jWpyZJYq51fRuUMKPCesYxDb9tgYds5JCSrcmQ9o59KMo7QNiS0-fa8eHHdgqf3iakd1iGt7c7232LcTmmMaHbZcP86EpBswiaFtYU2BsZnblOXQyVU8Fw99xz4~w8X3AfLr5qnspa~spQVugu7BQ__'/> 
        </div>    
     </div>
     <div
      className="super-host-container"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/7d/56/c3/7d56c3d523b9a5530a82004fbd24fbe0.jpg')",
      }}
    >
      <div>
      <h1>Questions <br /> about <br /> hosting?</h1> 
      </div>
      <button>Ask a superhost</button>
    </div>
    <div className="location-container">
      <h1>Inspiration for future getaways</h1>

      <div className="location-header">
        <h3>Destination for arts & Culture</h3>
        <h3>Destination for outdoor adventure</h3>
        <h3>Mountain cabins</h3>
        <h3>Beach destinations</h3>
        <h3>Popular destinations</h3>
        <h3>Unique Stays</h3> 
      </div>

      <div className="location-footer">
        <h4>Phoenix</h4><p>Arizona</p>
        <h4>San Francisco</h4><p>California</p>
        <h4>Keswick</h4><p>England</p>
        <h4>Hot Springs</h4><p>Arkansas</p>
        <h4>Barcelona</h4><p>Catalonia</p>
        <h4>London</h4><p>England</p>
        <h4>Los Angeles</h4><p>California</p>
        <h4>Prague</h4><p>Czechia</p>
        <h4>Scarborough</h4><p>England</p>
        <h4>San Diego</h4><p>California</p>
        <h4>Washington</h4><p>District of Columbia</p>
        <h3>Show more</h3>
      </div>
    </div>
   </div>

    
  );
};

export default CityCards;
