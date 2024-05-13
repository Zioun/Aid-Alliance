import React from 'react';
import Carousel from '../components/Carousel';
import VolunteerNeedsNow from '../components/VolunteerNeedsNow';
import Team from '../components/Team';
import WhoWeAre from '../components/Services';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <WhoWeAre/>
            <VolunteerNeedsNow/>
            <Team/>
        </div>
    );
};

export default Home;