import React, { useState } from "react";
import { AiOutlineUser as User } from "react-icons/ai";
import { BiLockOpen as Lock, BiAt as At } from "react-icons/bi";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
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
            <SignIn
              User={User}
              Lock={Lock}
              isActive={isActive}
              setIsActive={setIsActive}
              handleToggle={handleToggle}
            />
            <SignUp
              User={User}
              Lock={Lock}
              At={At}
              isActive={isActive}
              setIsActive={setIsActive}
              handleToggle={handleToggle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
