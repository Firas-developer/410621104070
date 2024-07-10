import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/product/:id" component={ProductPage} />
      </Routes>
    </Router>
  );
}

export default App;