import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import SelectedOptions from './components/SelectedOptions';
import CarPrice from './components/CarPrice';
import Navbar from './components/NavBar'; 
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <div className="options-body">
      <SelectedOptions />
      <CarPrice />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);