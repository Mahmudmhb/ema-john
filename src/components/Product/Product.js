import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, stock, category, seller, img, star, starCount } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <h5>Category: {category}</h5>
                <h5>Seller: {seller}</h5>
                <h5>starCount: {starCount}</h5>
                <h5><small>Only {stock} stcok is left order now</small></h5>
                <button
                    onClick={() => props.handleAddTOCart(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;