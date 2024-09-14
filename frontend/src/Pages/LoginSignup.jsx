import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./CSS/LoginSignup.css";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const { url, token, setToken } = useContext(ShopContext);
  const [login, setLogin] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (login === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    console.log(response);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="loginsignup">
      <form onSubmit={onLogin}>
        <div class="loginsignup-container">
          <h1>{login === "login" ? "Login" : "Sign Up"}</h1>
          <div className="loginsignup-fields">
            {login === "signup" && (
              <input
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                type="text"
                placeholder="Your Name"
                required
              />
            )}

            <input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Email address"
              required
            />
            <input
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="pw-reset">
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Forgot your password?</p>
          </div>
          <button type="submit">
            {login === "login" ? "Login" : "Sign up"}
          </button>
          <p className="login-with">Or,Login with</p>
          <div>
            <img src="" alt="" />
            <button>Sign up with google</button>
          </div>
          {login === "login" ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setLogin("signup")}>Sign Up here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setLogin("login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
