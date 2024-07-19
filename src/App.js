import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './pages/MainContainer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainContainer />} />
    </Routes>
  </BrowserRouter>
);

export default App;
// Testing food or menu items in the list