import React from 'react';
import Footer from '../Footer/Footer';
import Discover from '../Shared/Discover/Discover';
import Entertainment from '../Shared/Entertainment/Entertainment';
import Play from '../Shared/Play/Play';

import Trip from '../Trip/Trip';
import Banner from './Banner/Banner';
import RoomBanner from './Banner/RoomBanner';
import Stay from './Banner/Stay/Stay';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Stay/>
            <RoomBanner/>
            <Discover/>
            <Trip/>
            <Play/>
            <Entertainment/>
            <Footer/>
           
        </div>
    );
};

export default Home;