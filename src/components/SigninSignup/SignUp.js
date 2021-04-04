import React from "react";
import { Link } from "react-router-dom";
const SignUp = ({ User, Lock, At }) => {
  return (
    <>
      <form action="" className="login__create none" id="login-up">
        <h1 className="login__title">Create Account</h1>
        <div className="login__box">
          <User className="login__icon" />
          <input type="text" placeholder="Username" className="login__input" />
        </div>

        <div className="login__box">
          <At className="login__icon" />
          <input type="text" placeholder="Email" className="login__input" />
        </div>

        <div className="login__box">
          <Lock className="login__icon" />
          <input type="text" placeholder="Password" className="login__input" />
        </div>

        <Link href="#" className="login__button">
          Sign Up
        </Link>

        <div>
          <span className="login__account login__account--account">
            Already have an Account?
          </span>
          <span className="login__signup login__signup--signup" id="sign-in">
            Sign In
          </span>
        </div>

        <div className="login__social">
          <Link href="#" className="login__social--icon">
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link href="#" className="login__social--icon">
            <i className="bx bxl-twitter"></i>
          </Link>
          <Link href="#" className="login__social--icon">
            <i className="bx bxl-google"></i>
          </Link>
          <Link href="#" className="login__social--icon">
            <i className="bx bxl-github"></i>
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
