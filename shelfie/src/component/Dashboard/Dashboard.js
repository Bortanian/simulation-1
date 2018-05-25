import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
        this.deleteProduct = this.deleteProduct.bind(this)
        
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`)
        this.props.getAll()
      }
    
    render(){
        let {inventory} = this.props;
        
        let mappedInventory = inventory.map((item, i) => {
            console.log(item)
            return(
                <div key={item.product_id}>
                    <Product id={item.product_id} name={item.name} price={item.price} image={item.image_url} delete={this.deleteProduct}/>
                </div>
            )
        })
        return(
            <div>
                {mappedInventory}
            </div>
        )
    }
}