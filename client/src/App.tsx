import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ErrorPage,
  WelcomePage,
} from "./pages"

function App(){
  return (
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
