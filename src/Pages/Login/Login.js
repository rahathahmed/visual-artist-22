import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { googleSignIn, signInEmailandPassword, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_url = location.state?.from || "/";
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
    e.preventDefault();
    signInEmailandPassword(email, password)
      .then((userCredential) => {
        setIsLoading(true);
        const user = userCredential.user;
        history.push(redirect_url);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    e.preventDefault();
  };

  const signInGoogle = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        setIsLoading(true);
        const user = result.user;
        console.log(user);
        history.push(redirect_url);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="container p-5 mt-5">
      <div
        className="row"
        style={{
          width: "350px",
          border: "2px solid #ddd",
          padding: "10px",
          margin: "auto",
        }}
      >
        <form className=" m-auto mt-3 " onSubmit={handleWithSubmit}>
          <h4 style={{ textAlign: "left", padding: "5px 0" }}>Sign In </h4>
          <div class="form-group mb-3">
            <label
              style={{
                textAlign: "left",
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {" "}
              Email or Mobile Number :
            </label>

            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ background: "#fff", borderColor: "black" }}
              onChange={emailData}
            />
          </div>
          <div class="form-group mb-3">
            <label
              style={{
                textAlign: "left",
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {" "}
              Enter Your Password :
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              style={{ background: "#fff", borderColor: "black" }}
              onChange={passwordData}
            />
          </div>

          <button
            style={{ background: "#393737", color: "#fff" }}
            type="submit"
            class=" form-control btn mb-2 "
          >
            Log in
          </button>
          <span className="p-2" style={{ fontSize: "12px" }}>
            By continuing, you agree to Amazon's <a href="#"> Conditions </a> of
            Use and
            <a href="#"> Privacy Notice</a>.
          </span>
        </form>
        <small className="p-2">
          {" "}
          new user to udubas? <Link to="/register"> create a new account</Link>
        </small>
        <div style={{ padding: "15px" }}>
          <button
            style={{ background: "#393737", color: "#fff", padding: "5px" }}
            type="submit"
            class=" form-control btn mb-2"
            onClick={signInGoogle}
          >
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google-color.svg"
              style={{ width: "20px", marginRight: "5px" }}
            />{" "}
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
