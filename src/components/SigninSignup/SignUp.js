import React, { useRef, useState } from "react";

import Input from "../Input";
import Button from "../Button";
import Icons from "../Icons";
import { useAuth } from "../../contexts/AuthContext";
import Error from "../Error";

const SignUp = ({ User, Lock, At, isActive, setIsActive, handleToggle }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password do no match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Faild to create account");
    }
    setLoading(false);
  }

  return (
    <>
      <form
        action=""
        className={isActive ? "login__create " : "login__create none"}
        onSubmit={handleSubmit}
      >
        <h1 className="login__title">Create Account</h1>

        {error && <Error error={error} />}
        <div className="login__box">
          <At className="login__icon" />
          <Input type="email" placeholder="Email" ref={emailRef} />
        </div>

        <div className="login__box">
          <Lock className="login__icon" />
          <Input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <Input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
        </div>

        <Button disabled={loading}>Sign Up</Button>

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
