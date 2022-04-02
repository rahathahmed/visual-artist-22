import React from 'react';


const styleButton = {
  background: "#48624F",
  borderRadius: "5px",
  color: "#fff",
  height:'30px',
  padding:'5px'
};

const styleButton2 = {
  background: "#000",
  borderRadius: "5px",
  color: "#fff",
  height: "30px",
  padding: "5px",
};

const CourceBlock = ({cource}) => {
    const  {thumb,name,lesson,student,price} = cource;
    return (
      <div class="card border-0 text-center">
        <div className="card-body">
          <img src={thumb} className="img-fluid" alt="" srcset="" />
          <div class="d-flex">
            <h6 style={{ textAlign: "left" }}>{name}</h6>
            <span style={styleButton}> ${30} </span>
          </div>
          <div className="availity d-flex justify-content-between mt-2">
            <span style={styleButton2}>
              {" "}
              <b>{lesson} </b> lesson
            </span>
            <span>
              {" "}
              <b> {student} </b> student
            </span>
          </div>
        </div>
      </div>
    );
};

export default CourceBlock;