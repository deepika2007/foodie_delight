import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddRestaurant from './pages/AddRestaurant';
import ListRestaurants from './pages/ListRestaurants';
import EditRestaurant from './pages/EditRestaurant';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ListRestaurants />} />
      <Route path="/add" element={<AddRestaurant />} />
      <Route path="/edit/:id" element={<EditRestaurant />} />
    </Routes>
  </BrowserRouter>
);

export default App;
// Testing food or menu items in the list