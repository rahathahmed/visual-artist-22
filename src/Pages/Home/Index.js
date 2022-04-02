import React from 'react';
import Blog from '../Blog/Blog';
import Course from '../Courses/Course';
import Newsteller from '../Newstellar/Newsteller';
import Service from '../Service/Service';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Course/>
            <Blog/>
            <Newsteller/>
        </div>
    );
};

export default Home;