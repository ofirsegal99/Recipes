import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/mainPage';
import SignupPage from './pages/signupPage';
import LoginPage from "./pages/loginPage";
import RecipesPage from "./pages/recipesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Recipes" element={<RecipesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
