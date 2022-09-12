import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inscription from './inscription/Inscription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="inscripcion" element={<Inscription />} />
        {/*  <Route path="teams" element={<Teams />}> */}
        {/*    <Route path=":teamId" element={<Team />} /> */}
        {/*    <Route path="new" element={<NewTeamForm />} /> */}
        {/*    <Route index element={<LeagueStandings />} /> */}
        {/*  </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
