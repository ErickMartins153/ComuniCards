import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CreateCartao from "../pages/CreateCard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import FavoriteCards from "../pages/FavoriteCards";

export function AppRoutes() {
  const { usuario } = useContext(AuthContext);

  return (
    <Routes>
      {!usuario ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCartao />} />
          <Route path="/favorites" element={<FavoriteCards />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
