import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: '',
            priceInput: 0,
            imageInput: ''
        }

        this.handleCancelClick = this.handleCancelClick.bind(this)
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
    handleCancelClick() {
        this.setState({
            nameInput: '',
            priceInput: 0,
            imageInput: ''
        })
    }
    render(){
        return(
            <div>
                <p>Form</p>
                <input placeholder='image url...' value={this.state.imageInput} onChange={(e) => this.handleImageChange(e.target.value)}/>
                <input placeholder='name...' value={this.state.nameInput} onChange={(e) => this.handleNameChange(e.target.value)}/>
                <input placeholder='price...' value={this.state.priceInput} onChange={(e) => this.handlePriceChange(e.target.value)}/>
                <button onClick={() => this.handleCancelClick()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}