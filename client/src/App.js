import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home")); //lazy Home Page Loading
const Login = lazy(() => import("./pages/Login")); //lazy Login Page Loading
const Chat = lazy(() => import("./pages/Chat")); //lazy Chat Page Loading
const Groups = lazy(() => import("./pages/Groups")); //lazy Chat Page Loading
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  );
}
