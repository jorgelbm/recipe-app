import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CafeDaManha from './routes/cafeDaManha'
import Almoco from './routes/almoco';
import Janta from './routes/janta';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cafe-da-manha" element={<CafeDaManha/>}/>
        <Route path="almoco" element={<Almoco />}/>
        <Route path="jantar" element={<Janta />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
