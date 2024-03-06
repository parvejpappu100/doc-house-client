import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import LocationInfo from '../LocationInfo/LocationInfo';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OurServices></OurServices>
          <LocationInfo></LocationInfo>
        </div>
    );
};

export default Home;