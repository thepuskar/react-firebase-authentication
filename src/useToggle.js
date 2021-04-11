import { useState } from "react";

const useToggle = () => {
  const [isActive, setIsActive] = useState("");

  return {
    isActive,
    setIsActive,
  };
};

export default useToggle;
