import React from "react";

import Input from "../Input";
import Button from "../Button";
import Icons from "../Icons";

const SignUp = ({ User, Lock, At, isActive, setIsActive, handleToggle }) => {
  return (
    <>
      <form
        action=""
        className={isActive ? "login__create " : "login__create none"}
        id="login-up"
      >
        <h1 className="login__title">Create Account</h1>
        <div className="login__box">
          <User className="login__icon" />
          <Input type="text" placeholder="Username" />
        </div>

        <div className="login__box">
          <At className="login__icon" />
          <Input type="email" placeholder="Email" />
        </div>

        <div className="login__box">
          <Lock className="login__icon" />
          <Input type="password" placeholder="Password" />
        </div>

        <Button>Sign Up</Button>

        <div>
          <span className="login__account login__account--account">
            Already have an Account?
          </span>
          <span
            className="login__signup login__signup--signup"
            onClick={handleToggle}
          >
            Sign In
          </span>
        </div>

        <Icons />
      </form>
    </>
  );
};

export default SignUp;
