import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Estudiante from './Estudiante';

const root = ReactDOM.createRoot(document.getElementById('root'));

let obj = {
  nombre:'Martina',
  apellido:'Garcia',
};

root.render(
  <React.StrictMode>
    <Estudiante persona={obj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
