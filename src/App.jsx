import { Route } from 'react-router-dom';
import './App.css';

//Componentes
import Header from "./components/Header/Header";
import Router from './router';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
