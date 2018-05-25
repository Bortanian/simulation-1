import React, {Component} from 'react'
import axios from 'axios'
import './Form.css'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: '',
            priceInput: 0,
            imageInput: 'http://www.4th-may.org/wp-content/uploads/2014/11/no-image.png'
        }

        this.clearFields = this.clearFields.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
    }


    handleNameChange(val) {
        this.setState({
            nameInput: val
        })
    }
    handlePriceChange(val) {
        this.setState({
            priceInput: val
        })
    }
    handleImageChange(val) {
        this.setState({
            imageInput: val
        })
    }
    clearFields() {
        this.setState({
            nameInput: '',
            priceInput: 0,
            imageInput: 'http://www.4th-may.org/wp-content/uploads/2014/11/no-image.png'
        })
    }
    addToInventory() {
        axios.post('/api/product', 
            {
            name: this.state.nameInput, 
            price: this.state.priceInput,
            image_url: this.state.imageInput
            })
        this.props.getAll();
        this.clearFields();
    }

    render(){
        return(
            <div className='form-box'>
                <img className='form-img' src={this.state.imageInput} />
                <div className='input'>
                    <p>Image URL:</p>
                    <input onChange={(e) => this.handleImageChange(e.target.value)}/>
                </div>
                <div className='input'>
                    <p>Product Name:</p> 
                    <input value={this.state.nameInput} onChange={(e) => this.handleNameChange(e.target.value)}/>
                </div>
                <div className='input'>
                    <p>Price:</p>
                    <input value={this.state.priceInput} onChange={(e) => this.handlePriceChange(e.target.value)}/>
                </div>
                <div>
                    <button onClick={() => this.clearFields()}>Cancel</button>
                    <button onClick={() => this.addToInventory()}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}