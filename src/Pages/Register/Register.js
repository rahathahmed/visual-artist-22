import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const { createEmailandPassword } = useAuth();
  const [user, setUser] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailData = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };
  const passwordData = (e) => {
    setPassword(e.target.value);
    e.preventDefault();
  };

  const handleWithSubmit = (e) => {
    createEmailandPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        // history.push(redirect_url);
      })
      .catch((error) => {
        // ..
      });
    e.preventDefault();
  };

  return (
    <div className="container p-5 mt-5">
      {user?.email && (
        <div className="alert alert-success w-70 mx-auto" role="alert">
          Account Create Succesfully !!!!! Back To{" "}
          <Link to="/"> Home Page</Link>
        </div>
      )}
      <div
        className="row"
        style={{
          width: "350px",
          border: "2px solid #ddd",
          padding: " 0 5px",
          margin: "auto",
        }}
      >
        {" "}
        <form className=" m-auto mt-3 " onSubmit={handleWithSubmit}>
          <h4 style={{ textAlign: "left", padding: "5px 0" }}>
            Create a account{" "}
          </h4>
          <div className="form-group mb-3">
            <label
              style={{
                textAlign: "left",
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {" "}
              Your Name:
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ background: "#fff", borderColor: "black" }}
            />
          </div>

          <div className="form-group mb-3">
            <label
              style={{
                textAlign: "left",
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {" "}
              Your Mobile Number *:
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ background: "#fff", borderColor: "black" }}
              onChange={emailData}
            />
          </div>

          <div className="form-group mb-3">
            <label
              style={{
                textAlign: "left",
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {" "}
              Password * :
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={{ background: "#fff", borderColor: "black" }}
              onChange={passwordData}
            />
          </div>

          <div className="form-group mb-3">
            <label
              style={{
                textAlign: "left",
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {" "}
              Re-enter your Password :
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={{ background: "#fff", borderColor: "black" }}
            />
          </div>

          <button
            style={{ background: "#393737", color: "#fff" }}
            type="submit"
            className=" form-control btn mb-2 "
          >
            Register
          </button>
          <span className="p-2" style={{ fontSize: "12px" }}>
            {" "}
            By creating an account, you agree to Amazon's By continuing,
            <a href="#"> Conditions </a> of Use and
            <a href="#"> Privacy Notice</a>.
          </span>
        </form>
        <small className="p-2">
          {" "}
          Already have a account <Link to="/login"> sign in</Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
