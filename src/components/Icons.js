import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="icons">
      <span className="icons--icon">
        <FaFacebookF />
      </span>
      <span className="icons--icon">
        <FaTwitter />
      </span>
      <span className="icons--icon">
        <FaGoogle />
      </span>
      <span className="icons--icon">
        <FaGithub />
      </span>
    </div>
  );
};

export default Icons;
