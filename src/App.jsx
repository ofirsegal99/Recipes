import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
