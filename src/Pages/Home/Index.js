import React from 'react';
import Blog from '../Blog/Blog';
import Course from '../Courses/Course';
import Footer from '../Footer/Footer';
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
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;