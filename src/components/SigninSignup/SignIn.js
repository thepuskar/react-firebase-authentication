import React from "react";

import Input from "../Input";
import Button from "../Button";

const SignIn = ({ User, Lock, isActive, setIsActive, handleToggle }) => {
  return (
    <>
      <form
        action=""
        className={isActive ? "login__register none" : "login__register "}
        id="login-in"
      >
        <h1 className="login__title">Sign In</h1>
        <div className="login__box">
          <User className="login__icon" />
          <Input type="text" placeholder="Username" />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <Input type="password" placeholder="Password" />
        </div>
        <span className="login__forgot">Forgot Password? </span>
        <Button>Sign In</Button>

        <div>
          <span className="login__account login__account--account">
            Don't Have an Account?
          </span>
          <span
            className="login__signin login__signin--signup"
            onClick={handleToggle}
          >
            Sign Up
          </span>
        </div>
      </form>
    </>
  );
};

export default SignIn;
