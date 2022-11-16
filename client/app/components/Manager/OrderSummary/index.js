/**
 *
 * OrderSummary
 *
 */

import React from 'react';

import { Col } from 'reactstrap';
const renderPopoverContent = item => {
  const statuses = [
    'Thanh toán khi nhận hàng',
    'Thẻ tín dụng',
    'Ví điện tử'
   
  ];}
const OrderSummary = props => {
  const { order } = props;

  return (
    <Col className='order-summary pt-3'>
      <h2>Thông tin thanh toán</h2>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Tổng tiền</p>
        <p className='summary-value ml-auto'>${order.total}</p>
      </div>
      

      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Phí vận chuyển</p>
        <p className='summary-value ml-auto'>Miễn phí</p>
      </div>

      <hr />
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Total</p>
        <p className='summary-value ml-auto'>${order.totalWithTax}</p>
      </div>
      
    </Col>
  );
};

export default OrderSummary;
