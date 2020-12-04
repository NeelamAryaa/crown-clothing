import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../../redux/cart/cart.selector';

import './checkout.styles.scss';

import CheckoutItem from '../../checkout-item/checkout-item';

import StripeCheckoutButton from '../../stripe-button/stripe-button';

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='checkout-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-block'>
                    <span>Description</span>
                </div>
                <div className='checkout-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-block'>
                    <span>Remove</span>
                </div>
            </div>  
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }  
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div> 
            <div className='text-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: Any Future date - CVV: Any 3 digits
            </div>
            <StripeCheckoutButton price={total} />       
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
