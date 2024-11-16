import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCartao from "./pages/CreateCard";
import { AudioContextProvider } from "./context/AudioContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <AudioContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCartao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AudioContextProvider>
  );
}

export default App;
