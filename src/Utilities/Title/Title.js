import React from 'react';
import './Title.css'
const Title = ({title}) => {
    const {subtitle,heading,subheading} = title 
    return (
      <div className='text-center slogan mt-5'>
        <span>{subtitle}</span>
        <h2>
          {heading}
          <br />
          <span>{subheading} </span>
        </h2>
      </div>
    );
};

export default Title;