import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material';
import UserTheme from './components/UserTheme';
import { Route, Routes } from 'react-router-dom';
import Gallery from './components/products/Gallery';
import GalleryPage from './pages/product/GalleryPage';

function App() {
  return (
    <ThemeProvider theme={UserTheme}>
      <div className="App">
      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/gallery'  element={<GalleryPage/>}></Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
