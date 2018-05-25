import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    }
    this.getAllInventory = this.getAllInventory.bind(this)
    
  }
  componentDidMount() {
    this.getAllInventory()
  }

  getAllInventory(){
    axios.get('/api/inventory').then( (res) => {
      this.setState({
        inventory: res.data
      })
      
    });
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <Form getAll={this.getAllInventory} current={this.state.currentProduct}/>
        <Dashboard inventory={this.state.inventory} getAll={this.getAllInventory} />
      </div>
    );
  }
}

export default App;
