import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCartao from "./pages/CreateCard";
import { AudioContextProvider } from "./context/AudioContext";

function App() {
  return (
    <AudioContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCartao />} />
        </Routes>
      </Router>
    </AudioContextProvider>
  );
}

export default App;
