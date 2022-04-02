import React from 'react';
import './Block.style.css'
const ServiceBlock = ({service}) => {

    const {name,description,icon} = service

    return (
      <div class="card border-0 text-center">
        <i className={icon} style={{ fontSize: "30px", color: "#9A9B7B" }}></i>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    );
};

export default ServiceBlock;