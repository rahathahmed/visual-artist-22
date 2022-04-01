import React from 'react';
import CourceBlock from '../../Sub-Component/CourceBlock/CourceBlock';
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
const Course = () => {
    return (
      <div className="container">
        <div className="slogan text-center mt-4">
          <span> COURCE </span>
          <h2>
            Learn about <br />
            Online Course
          </h2>

          <div className="cources-wrapper ">
            <div className="row mt-3">
              {cources.map((cource) => (
                <div className="col-md-3">
                  <CourceBlock cource={cource} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Course;