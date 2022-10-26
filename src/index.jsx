import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Inscription from './pages/inscription/Inscription';
import Admin from './pages/admin/Admin';
import Home from './pages/home/Home';
import Schedule from './pages/schedule/Schedule';
import Prices from './pages/prices/Prices';
import Groups from './pages/lessons/Groups';
import Student from './pages/student/Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inscripcion" element={<Inscription />} />
        <Route path="horario" element={<Schedule />} />
        <Route path="clases" element={<Groups />} />
        <Route path="precios" element={<Prices />} />
        <Route path="admin" element={<Admin />} />
        <Route path="alumnos/:email" element={<Student />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
