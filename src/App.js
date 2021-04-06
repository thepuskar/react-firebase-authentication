import { BrowserRouter as Router, Route } from "react-router-dom";
import SigninSignup from "./components/SigninSignup";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Route exact path="/" component={Dashboard} />
          <Route path="/sign" component={SigninSignup} />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
