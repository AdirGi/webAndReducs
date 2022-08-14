import React from 'react';
import './App.css';
import FlightsPage from './pages/FlightsPage';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import BuyTickets from "./pages/BuyTickets";


function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/flights' element={<FlightsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/buy' element={<BuyTickets />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </div>
  );
}

export default App;
