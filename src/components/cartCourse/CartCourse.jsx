import React from 'react';

const CartCourse = (props) => {
    const cart = props.cartCourse;
    // console.log(cart)
    const totalPrice = cart.reduce((total , cart) => total + cart.coursePrice , 0)
    return (
        <div className="d-flex flex-column">
            <h4 className="bg-success border p-2">Number of Enrolled : {cart.length}</h4>
            <h5 className="bg-danger p-2 border">Total Price : $ {totalPrice}</h5>
        </div>
    );
};

export default CartCourse;