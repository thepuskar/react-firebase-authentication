import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../Input";
import Button from "../Button";
import Message from "../Message";
import { BiAt as At } from "react-icons/bi";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSuccessMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setSuccessMessage("Check your Mail");
    } catch {
      setError("Reset Password failed");
    }
    setLoading(false);
  }
  return (
    <div className="reset">
      <form action="" className="login__reset" onSubmit={handleSubmit}>
        <h1 className="login__title">Reset Password</h1>
        {error && <Message error={error} subclass="error" />}
        {successMessage && (
          <Message successMessage={successMessage} subclass="success" />
        )}
        <div className="login__box">
          <At className="login__icon" />
          <Input type="text" placeholder="Email" ref={emailRef} />
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
