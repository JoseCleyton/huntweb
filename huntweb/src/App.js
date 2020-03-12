import React from 'react';
import api from './services/api';
import Main from './pages/main';
import Header from './components/Header';
import './styles.css';
import Routes from './routes'
import Router from './routes';
const App = () => (
  <div className="App">
    <Header />
    <Router />
  </div>
);

export default App;
