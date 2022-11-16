/**
 *
 * AddAddress
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Checkbox from '../../Common/Checkbox';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AddAddress = props => {
  const { addressFormData, formErrors, addressChange, addAddress } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addAddress();
  };

  return (
    <div className='add-address'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['address']}
              label={'Địa chỉ'}
              name={'address'}
              placeholder={'Địa chỉ: Số nhà, Tên Đường, quận, huyện'}
              value={addressFormData.address}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['city']}
              label={'Tỉnh/ Thành Phố'}
              name={'city'}
              placeholder={'City'}
              value={addressFormData.city}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['country']}
              label={'Quốc gia'}
              name={'country'}
              placeholder={'Việt Nam'}
              value={addressFormData.country}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          
          <Col xs='12' md='12'>
            <Checkbox
              id={'default'}
              label={'Đặt làm địa chỉ mặc định'}
              name={'isDefault'}
              checked={addressFormData.isDefault}
              onChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-address-actions'>
          <Button type='submit' text='Thêm' />
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
