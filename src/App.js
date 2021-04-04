import SigninSignup from "./components/SigninSignup";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <SigninSignup />
      </AuthProvider>
    </>
  );
}

export default App;
