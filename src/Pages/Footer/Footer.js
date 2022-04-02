import React from 'react';

const Footer = () => {
    return (
      <div className="bg-dark text-light pt-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Art Studio</h2>
              <p>
                2021 art studio .<br />
                All right reseved
              </p>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Pages</li>
                <li>Cources</li>
                <li>Event</li>
                <li>Blog</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li>Documentation</li>
                <li>FAQs</li>
                <li>Forum</li>
                <li>Event</li>
                <li>Blog</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="address">
                <p>
                  Are 21 <br />
                  Supportstudio.com{" "}
                </p>
                <div className="social-link">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;