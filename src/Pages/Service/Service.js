import React from 'react';
import Data from '../../Const/Const';
import ServiceBlock from '../../Sub-Component/ServiceBlock/ServiceBlock';
import './Service.Style.css';

const Service = () => {
    return (
      <div className="container">
        <div className="slogan text-center pt-4">
          <span>SERVICES</span>
          <h2>
            Why you need? <br />
            <span> I provide you that </span>
          </h2>
        </div>

        <div className="row mt-5">
          {Data.service.map((service) => (
            <div className="col-md-3">
              <ServiceBlock service={service} />
            </div>
          ))}
        </div>
        {/* <div className="vedio-banner mt-4">
          <img
            src="https://i.ibb.co/NF7GPrG/various-art-brush-paint-preview.jpg"
            alt=""
            className='w-100'
          />
        </div> */}
      </div>
    );
};

export default Service;