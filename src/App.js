import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SigninSignup from "./components/SigninSignup";
import ForgotPassword from "./components/SigninSignup/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";
import UpdateProfile from "./components/Dashboard/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/sign" component={SigninSignup} />
            <Route path="/forgotpassword" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
