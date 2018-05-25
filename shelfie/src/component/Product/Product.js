import React from 'react'
import './Product.css'

export default function Product(props) {
    console.log(props)
    return (
        <div className='product-box'>
            <img className='product-image' src={props.image}/>
            <p>{props.name}</p>
            <p>${props.price}</p>
            <button onClick={ () => props.delete(props.id)}>DELETE</button>
        </div>
    ) 
}