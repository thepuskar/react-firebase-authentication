import React, { useState } from "react";

import Error from "../Error";
import Button from "../Button";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  function handleLogOut() {
    console.log("log out");
  }
  return (
    <div className="main">
      <div className="main__title">
        <h1>
          Welcome <span className="main__email">{currentUser.email}</span>
        </h1>

        {error && <Error error={error} />}
      </div>
      <div className="main__button">
        <Button onClick={handleLogOut} subclass="green">
          Update Profile
        </Button>
      </div>
      <div className="main__button">
        <Button onClick={handleLogOut} subclass="danger">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
