import React from "react";

const Input = React.forwardRef(({ type, placeholder }, ref) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        ref={ref}
      />
    </>
  );
});

export default Input;
