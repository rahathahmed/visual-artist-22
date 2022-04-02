import React from 'react';
import Image1 from '../../../Img/bg.png'
import './Banner.css'
const Banner = () => {
    return (
      <div style={{background:'#FAF9F5'}}>
        <div className="row p-4">
          <div className="col-md-6">
            <img width={"450px"} src={Image1} className="mx-auto" alt="" srcset="" />
          </div>
          <div className="col-md-6">
            <div className="content mt-5 text-left">
              <h5>Hi I am Ferdaus</h5>
              <h2>
                Grow skill in  <br />
                <span>visual artist </span>
              </h2>
              <button className='primary-btn'> Free Compition </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;