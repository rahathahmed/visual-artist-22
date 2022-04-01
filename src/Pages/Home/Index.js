import React from 'react';
import Course from '../Courses/Course';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import Header from './Header/Header.js';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Service/>
            <Course/>
        </div>
    );
};

export default Home;