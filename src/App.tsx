import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pokedex from './pages/Pokedex';
import Error404 from './pages/Error404';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/acerca' element={<Navigate to="/about"/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contacto' element={<Navigate to="/contact"/>}/>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
};

export default App

