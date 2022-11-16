/**
 *
 * CartIcon
 *
 */

import React from 'react';

import { BagIcon } from '../Icon';
import Button from '../Button';

const CartIcon = props => {
  const { className, onClick, cartItems } = props;

  const Icon = (
    <span className='cart-icon'>
      <BagIcon />
      {cartItems.length > 0 && (
        <span className='cart-badge'>
          {cartItems.length >= 99 ? '99+' : cartItems.length}
        </span>
      )}
    </span>
  );

  const items = cartItems.length;

  return (
    <Button
      borderless
      variant='empty'
      className={className}
      ariaLabel={
        items > 0 ? `Giỏ hàng của bạn đang có ${items} món` : 'Giỏ hàng đang trống'
      }
      icon={Icon}
      onClick={onClick}
    />
  );
};

export default CartIcon;
