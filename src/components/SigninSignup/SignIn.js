import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../Input";
import Button from "../Button";
import Message from "../Message";

const SignIn = ({ At, Lock, isActive, setIsActive, handleToggle }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Faild to Sign In account");
    }
    setLoading(false);
  }
  return (
    <>
      <form
        action=""
        className={isActive ? "login__register none" : "login__register "}
        onSubmit={handleSubmit}
      >
        <h1 className="login__title">Sign In</h1>
        {error && <Message error={error} subclass="error" />}
        <div className="login__box">
          <At className="login__icon" />
          <Input type="text" placeholder="Email" ref={emailRef} />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <Input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <Link to="/forgotpassword">
          <span className="login__forgot">Forgot Password?</span>
        </Link>
        <Button disabled={loading} subclass="green">
          Sign In
        </Button>

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
