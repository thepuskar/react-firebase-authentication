import React from "react";
import SignInModal from "./SigninSignup/SignIn";
import SignUpModal from "./SigninSignup/SignUp";
import ForgotPasswordModal from "./SigninSignup/ForgotPassword";

export default function PopupController({ isActive, setIsActive }) {
  const controller = {
    signIn: <SignInModal setIsActive={setIsActive} />,
    signUp: <SignUpModal setIsActive={setIsActive} />,
    forgotPassword: <ForgotPasswordModal setIsActive={setIsActive} />,
  };
  return controller[isActive] || null;
}
