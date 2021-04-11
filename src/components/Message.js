import React from "react";

const Error = ({ error, subclass, successMessage }) => {
  return (
    <p className={`message message--${subclass}`}>
      {error ? error : successMessage}
    </p>
  );
};

export default Error;
