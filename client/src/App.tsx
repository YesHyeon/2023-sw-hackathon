import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import KakaoRedirectHandler from "./components/KakaoRedirectHandler";
import Community from "./pages/Community/Community";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/login" element={<KakaoRedirectHandler />} />
                <Route path="/community" element={<Community />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}
export default App;
