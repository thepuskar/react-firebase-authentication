import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PopupController from "../PopupController";
import useToggle from "../../useToggle";
import { BiLockOpen as Lock, BiAt as At } from "react-icons/bi";

const Index = () => {
  const { isActive, setIsActive } = useToggle();
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <PopupController isActive={isActive} setIsActive={setIsActive} />
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
              Lock={Lock}
              At={At}
              isActive={isActive}
              setIsActive={setIsActive}
              handleToggle={handleToggle}
            />
            <SignUp
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
