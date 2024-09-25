import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import LocationInfo from '../LocationInfo/LocationInfo';
import ClientSays from '../ClientSays/ClientSays';
import ExpertDoctors from '../ExpertDoctors/ExpertDoctors';
import ContactForm from '../../../components/ContactForm/ContactForm';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OurServices></OurServices>
          <LocationInfo></LocationInfo>
          <ClientSays></ClientSays>
          <ExpertDoctors></ExpertDoctors>
          <ContactForm></ContactForm>
        </div>
    );
};

export default Home;