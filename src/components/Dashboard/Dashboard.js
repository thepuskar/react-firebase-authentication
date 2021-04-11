import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Message from "../Message";
import Button from "../Button";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.push("/sign");
    } catch {
      setError("Unable to logout");
    }
  }
  return (
    <div className="main">
      <div className="main__title">
        <h1>
          Welcome <span className="main__email">{currentUser.email}</span>
        </h1>

        {error && <Message error={error} subclass="error" />}
      </div>
      <div className="main__button">
        <Button subclass="green">Update Profile</Button>
      </div>
      <div className="main__button" onClick={handleLogOut}>
        <Button subclass="danger">Log Out</Button>
      </div>
    </div>
  );
};

export default Dashboard;
