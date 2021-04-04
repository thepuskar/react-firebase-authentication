import React from "react";
import { Link } from "react-router-dom";

const SignIn = ({ User, Lock }) => {
  return (
    <>
      <form action="" className="login__register" id="login-in">
        <h1 className="login__title">Sign In</h1>
        <div className="login__box">
          <User className="login__icon" />
          <input type="text" placeholder="Username" className="login__input" />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <input type="text" placeholder="Password" className="login__input" />
        </div>
        <Link className="login__forgot">Forgot Password? </Link>

        <Link className="login__button">Sign In</Link>

        <div>
          <span className="login__account login__account--account">
            Don't Have an Account?
          </span>
          <span className="login__signin login__signin--signup" id="sign-up">
            Sign Up
          </span>
        </div>
      </form>
    </>
  );
};

export default SignIn;
