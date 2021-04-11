import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../Input";
import Button from "../Button";
import Error from "../Error";
import { BiLockOpen as Lock, BiAt as At } from "react-icons/bi";

const ForgotPassword = () => {
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
    <div className="reset">
      <form action="" className="login__reset" onSubmit={handleSubmit}>
        <h1 className="login__title">Forget Password</h1>
        {error && <Error error={error} />}
        <div className="login__box">
          <At className="login__icon" />
          <Input type="text" placeholder="Email" ref={emailRef} />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <Input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <Button disabled={loading} subclass="green">
          Reset Password
        </Button>
        <div>
          <Link to="sign">
            <span className="login__signin login__signin--signup">Sign In</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
