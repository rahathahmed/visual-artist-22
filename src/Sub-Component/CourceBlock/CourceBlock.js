import React from 'react';

const styleButton = {
  background: "#9A9B7B",
  border: "none",
  padding: "0px 5px",
  borderRadious: "10px",
  color: "#fff",
};

const CourceBlock = ({cource}) => {
    const  {thumb,name,lesson,student,price} = cource;
    return (
      <div class="card border-0 text-center">
        <img src={thumb} alt="" srcset="" />
        <div className="card-body">
          <div class="d-flex justify-content-between">
            <h6 className="text-left">{name}</h6>
            <button style={styleButton}>${price}</button>
          </div>
          <div className="availity d-flex justify-content-between mt-2">
            <span> {lesson} : lesson</span>
            <span> {student} : student</span>
          </div>
        </div>
      </div>
    );
};

export default CourceBlock;