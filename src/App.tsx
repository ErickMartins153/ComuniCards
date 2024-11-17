import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { AudioContextProvider } from "./context/AudioContext";
import { AppRoutes } from "./routes/AppRoutes";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthContextProvider>
      <AudioContextProvider>
        <Profile />
      </AudioContextProvider>
    </AuthContextProvider>
  );
}

export default App;
