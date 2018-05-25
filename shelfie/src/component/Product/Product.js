import React from 'react'
import './Product.css'

export default function Product(props) {
    return (
        <div className='product-box'>
            <img className='product-image' src={props.image}/>
            <p>{props.name}</p>
            <p>${props.price}</p>
        </div>
    ) 
}