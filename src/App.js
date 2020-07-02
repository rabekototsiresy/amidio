import React, { Component } from 'react';
import MyCars from "./Composant/MyCars";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <MyCars/>
      </div>
    );
  }
}
export default App;
