import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Navbarmenu from './components/menu/Navbarmenu';
import RoutesConfig from './components/menu/RoutesConfig';
import Footer from './components/Footer/Footer';
import AppBar from './components/Appbar/Appbar';

/*function App() {
  return (
    <div>
      <AppBar/>
      <Router basename="/">
        <Navbarmenu />
        <RoutesConfig/>
      </Router>
      <Footer/>

    </div>
  );
}*/
function App() {
  return (
    <div className="App">
      <div className="Appbar">
        <AppBar />
      </div>
      <main className="ContentContainer">
        <Router basename="/">
          <div className="Navbarmenu">
            <Navbarmenu />
          </div>
          <RoutesConfig />
        </Router>
        <Footer />
      </main>
    </div>
  );
}


export default App;
