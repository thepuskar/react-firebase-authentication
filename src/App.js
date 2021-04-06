import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SigninSignup from "./components/SigninSignup";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/sign" component={SigninSignup} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
