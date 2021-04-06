import React from "react";

const Button = ({ children, disabled, subclass }) => {
  return (
    <>
      <button className={`btn btn--${subclass}`} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
