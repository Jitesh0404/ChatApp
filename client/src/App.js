import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home")); //lazy Home Page Loading
const Login = lazy(() => import("./pages/Login")); //lazy Login Page Loading
const Chat = lazy(() => import("./pages/Chat")); //lazy Chat Page Loading
const Groups = lazy(() => import("./pages/Groups")); //lazy Chat Page Loading
const PageNotFound = lazy(() => import("./pages/PageNotFound")); //lazy PageNotFound Loading
export default function App() {
  let user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
