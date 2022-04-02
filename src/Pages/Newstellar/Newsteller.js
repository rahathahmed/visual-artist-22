import React from 'react';
import Image from '../../Img/bg.png'
const Newsteller = () => {
    return (
      <div className="wrapper mt-4 pt-4 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>
                Sign Up Our <br />
                NEWSTELLER <br />
                For leatest update...
              </h2>
            </div>
            <div className="col-md-4">
              <div class="input-group mt-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <img src={Image} width="200px" className='mx-auto' alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Newsteller;