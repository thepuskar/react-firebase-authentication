import React from "react";

const Button = ({ children, disabled }) => {
  return (
    <>
      <button className="btn" disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
