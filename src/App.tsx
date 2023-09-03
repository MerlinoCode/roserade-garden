import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pokedex from './pages/Pokedex';
import Error404 from './pages/Error404';

const App: React.FC = () => {
  return (
    <BrowserRouter>;
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/acerca' element={<Navigate to="/about"/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contacto' element={<Navigate to="/contact"/>}/>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App

