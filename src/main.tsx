import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Intro from './Intro';
import Hobby from './Hobby';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename="/my-intro-app">
      <Routes>
        <Route path="/" element={<Intro name="たか" />} />
        <Route path="/hobby" element={<Hobby hobby="ソフトテニス" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);