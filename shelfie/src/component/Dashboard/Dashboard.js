import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    
    render(){
        let {inventory} = this.props;
        
        let mappedInventory = inventory.map((item, i) => {
            console.log(item)
            return(
                <div key={i}>
                    <Product name={item.name} price={item.price} image={item.image_url} />
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