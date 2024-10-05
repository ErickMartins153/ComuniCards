import "./App.css";

import { AudioContextProvider } from "./context/AudioContext";
import Home from "./pages/Home";

function App() {
  return (
    <AudioContextProvider>
      <Home />
    </AudioContextProvider>
  );
}

export default App;
