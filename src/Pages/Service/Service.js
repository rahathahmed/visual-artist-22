import React from 'react';
import Data from '../../Const/Const';
import ServiceBlock from '../../Sub-Component/ServiceBlock/ServiceBlock';
import Title from '../../Utilities/Title/Title';
import './Service.Style.css';
const title = {
  subtitle: "Service",
  heading: "Knows from",
  subheading: "Our Students",
};
const Service = () => {
    return (
      <div className="container">
        <Title  title ={title}/>
        <div className="row mt-5">
          {Data.service.map((service) => (
            <div className="col-md-3">
              <ServiceBlock service={service} />
            </div>
          ))}
        </div>
        <div className="vedio-banner mt-4">
          <img
            src="https://i.ibb.co/NF7GPrG/various-art-brush-paint-preview.jpg"
            alt=""
            className='w-100'
          />
        </div>
      </div>
    );
};

export default Service;