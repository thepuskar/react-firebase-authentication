import React from "react";
import { Route, Switch } from "react-router-dom";
import { AiOutlineUser as User } from "react-icons/ai";
import { BiLockOpen as Lock, BiAt as At } from "react-icons/bi";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const index = () => {
  return (
    <>
      <div className="login">
        <div className="login__content">
          <div className="login__img">
            <img
              src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg"
              alt="user login"
            />
          </div>
          <div className="login__forms">
            <SignIn User={User} Lock={Lock} />
            <SignUp User={User} Lock={Lock} At={At} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
