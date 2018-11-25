import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import ToDoList from './components/ToDoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList />
      </div>
    );
  }
}

export default App;
