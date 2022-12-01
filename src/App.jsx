import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/mainPage';
import SignupPage from './pages/signupPage';
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
