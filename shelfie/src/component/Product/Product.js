import React from 'react'

export default function Product(props) {
    return (
        <div>
            <p>Product</p>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Image: {props.image}</p>
            <hr />
        </div>
    ) 
}