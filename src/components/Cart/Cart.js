import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total += product.price;
    }
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items Orderd: {cart.length}</h5>
            <h5>total: {total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;