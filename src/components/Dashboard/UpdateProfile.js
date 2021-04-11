import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../Input";
import Button from "../Button";
import Message from "../Message";
import { BiLockOpen as Lock, BiAt as At } from "react-icons/bi";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password do no match");
    }
    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className="reset">
      <form action="" className="login__reset" onSubmit={handleSubmit}>
        <h1 className="login__title">Update Profile</h1>
        {error && <Message error={error} subclass="error" />}
        <div className="login__box">
          <At className="login__icon" />
          <Input
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <Input
            type="password"
            placeholder="Blank for same password"
            ref={passwordRef}
          />
        </div>
        <div className="login__box">
          <Lock className="login__icon" />
          <Input
            type="password"
            placeholder="Blank for same password"
            ref={confirmPasswordRef}
          />
        </div>
        <Button disabled={loading} subclass="green">
          Update
        </Button>
        <div>
          <Link to="/">
            <Button disabled={loading} subclass="danger">
              Cancle
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
