import React from 'react';
import Footer from '../../Footer/Footer';
import useTitle from '../../UseTitle/UseTitle';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import HireMe from './Hireme/Hireme';
import RecentClientProject from './RecentClientProject/RecentClientProject';

const Home = () => {
    useTitle('home')
    return (
        <div>
           <Banner></Banner>
           <Service></Service>
           <RecentClientProject></RecentClientProject>
           <Footer></Footer>
           <HireMe></HireMe>
        </div>
    );
};

export default Home;