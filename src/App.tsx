import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { AudioContextProvider } from "./context/AudioContext";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <AuthContextProvider>
      <AudioContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AudioContextProvider>
    </AuthContextProvider>
  );
}

export default App;
