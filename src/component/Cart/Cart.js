import React from 'react';


const Cart = (props) => {
    console.log(props)
    const cart = props.cart;
    console.log(cart)
    const total = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if (total > 200) {
        shipping = 0
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax).toFixed(2));

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (

        <div>
            <h4>Order summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>product Price:{formatNumber(total)}</p>
            <p><small>Shipping cost:{shipping}</small></p>
            <p><small>Text + VAT:{tax}</small></p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;