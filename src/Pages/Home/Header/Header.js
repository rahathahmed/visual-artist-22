import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const styleLink={
  color:'#888',
  fontSize:'18px',
  marginRight:'10px',
  textDecoration:'none'
}
const Header = () => {
    const { user, logOut } = useAuth();
    return (
      <div>
        <nav class=" fixed-top navbar navbar-expand-lg navbar-light bg-light  shadow-sm">
          <div class="container">
            <span>Studio</span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/service">
                    Service
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/cources">
                    Cources
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                {user.email && (
                  <li class="nav-item">
                    {user.email ? (
                      <button className="primary-btn" onClick={logOut}>
                        {" "}
                        Logout{" "}
                      </button>
                    ) : (
                      <Link className="primary-btn" to="/login">
                        {" "}
                        Log in{" "}
                      </Link>
                    )}
                    {user.email && <span>{user.displayName}</span>}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;