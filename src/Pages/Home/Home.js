import React from 'react';
import Footer from '../../Footer/Footer';
import Service from '../Service/Service';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Service></Service>
           <Footer></Footer>
        </div>
    );
};

export default Home;