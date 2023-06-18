import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//Componentes
import Header from "./components/Header/Header";
import Router from './router';

function App() {
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
