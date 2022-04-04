import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Blog from '../Pages/Blog/Blog';
import Course from '../Pages/Courses/Course';
import Error from '../Pages/Error/Error';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Home/Header/Header';
import Home from '../Pages/Home/Index';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Service from '../Pages/Service/Service';
import Shop from '../Pages/Shop/Shop';

const Routing = () => {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/cources">
            <Course />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
};

export default Routing;


