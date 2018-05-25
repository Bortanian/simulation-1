import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios.get('/api/inventory').then( (res) => {
      this.setState({
        inventory: res.data
      })
      
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        <Form />
        <Dashboard inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
