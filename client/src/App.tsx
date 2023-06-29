import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import Community from './pages/Community/Community';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Result from './pages/Result/Result';
import Keyword from './pages/Keyword/Keyword';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<KakaoRedirectHandler />} />
        <Route path="/community" element={<Community />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result" element={<Result />} />
        <Route path="/keyword" element={<Keyword />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}
export default App;
