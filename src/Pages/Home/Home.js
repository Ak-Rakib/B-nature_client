import React from 'react';
import Footer from '../../Footer/Footer';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import RecentClientProject from './RecentClientProject/RecentClientProject';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Service></Service>
           <RecentClientProject></RecentClientProject>
           <Footer></Footer>
        </div>
    );
};

export default Home;