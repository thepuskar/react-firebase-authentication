import React, { useRef } from "react";

import Input from "../Input";
import Button from "../Button";
import Error from "../Error";

const SignIn = ({ At, Lock, isActive, setIsActive, handleToggle }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <>
      <form
        action=""
        className={isActive ? "login__register none" : "login__register "}
        id="login-in"
      >
        <h1 className="login__title">Sign In</h1>

        <div className="login__box">
          <At className="login__icon" />
          <Input type="text" placeholder="Email" ref={emailRef} />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <Input type="password" placeholder="Password" ref={passwordRef} />
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
