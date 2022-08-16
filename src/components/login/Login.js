import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

function Login() {
  const [showSignUp, setShowSignUP] = useState(false);
  const toggleSignUp = () => {
    setShowSignUP(!showSignUp);
  };
  return (
    <>
      <Navbar />
      <div className="login" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
              <h2 className="home-title text-center">Welcome To the Ecom</h2>

              <div className="login-wrapper">
                <h2 className="text-center">
                  {""}
                  {showSignUp ? "SignUp" : "Login"}
                </h2>

                {showSignUp ? (
                  <div className="input-group mt-4">
                    <input
                      type="text"
                      name=""
                      id="userName"
                      placeholder="User Name"
                      className="form-control"
                    />
                  </div>
                ) : (
                  <></>
                )}
                <div className="input-group mt-3">
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="input-group mt-3">
                  <input
                    type="password"
                    name=""
                    id="email"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="input-group mt-5">
                  <button className="btn btn-primary form-control">
                    {showSignUp ? "Sign Up" : "Login"}
                  </button>
                </div>
                <div
                  className="mt-2 text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleSignUp()}
                >
                  {showSignUp
                    ? "Already have an account? Login"
                    : "Don't Have an account? Sing up."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
