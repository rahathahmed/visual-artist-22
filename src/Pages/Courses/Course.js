import React from 'react';
import { Button } from 'react-bootstrap';
import CourceBlock from '../../Sub-Component/CourceBlock/CourceBlock';
import Title from '../../Utilities/Title/Title';
import './Courses.style.css'
const cources = [
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
  {
    thumb: "https://i.ibb.co/tQYd3R3/FREE-Python-Course-For-Beginners.png",
    name: "Phython Pro to Master",
    price: 200,
    lesson: 10,
    student: 23,
  },
];

const title = {
  subtitle: "Couser",
  heading: "Learn from",
  subheading: "Our Online Cources",
};
const Course = () => {
    return (
      <div className="container">
        <Title title={title}/>
        <div className="text-center mt-4">
          <div className="cources-wrapper ">
            <div className="row mt-3 g-2">
              {cources.map((cource) => (
                <div className="col-md-3">
                  <CourceBlock cource={cource} />
                </div>
              ))}
            </div>
            <button className='primary-btn' to='/allproducts'> View All Cource </button>
          </div>
        </div>
      </div>
    );
};

export default Course;