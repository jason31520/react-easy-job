import React from 'react';
import {Route, Routes} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/main' element={<MainPage />}></Route>
      <Route path='*' element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
