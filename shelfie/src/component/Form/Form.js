import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: '',
            priceInput: 0,
            imageInput: ''
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
            imageInput: ''
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
            <div>
                <p>Form</p>
                <input placeholder='image url...' value={this.state.imageInput} onChange={(e) => this.handleImageChange(e.target.value)}/>
                <input placeholder='name...' value={this.state.nameInput} onChange={(e) => this.handleNameChange(e.target.value)}/>
                <input placeholder='price...' value={this.state.priceInput} onChange={(e) => this.handlePriceChange(e.target.value)}/>
                <button onClick={() => this.clearFields()}>Cancel</button>
                <button onClick={() => this.addToInventory()}>Add to Inventory</button>
            </div>
        )
    }
}