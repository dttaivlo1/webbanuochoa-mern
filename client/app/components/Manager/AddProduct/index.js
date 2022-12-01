/**
 *
 * AddProduct
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Switch from '../../Common/Switch';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';

const taxableSelect = [
  { value: 1, label: 'Yes' },
  { value: 0, label: 'No' }
];

const AddProduct = props => {
  const {
    user,
    productFormData,
    formErrors,
    productChange,
    addProduct,
    brands,
    image
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addProduct();
  };

  return (
    <div className='add-product'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['sku']}
              label={'MÃ SP'}
              name={'sku'}
              placeholder={'sanpham001'}
              value={productFormData.sku}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Tên'}
              name={'name'}
              placeholder={'Tên SP'}
              value={productFormData.name}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Mô tả'}
              name={'description'}
              placeholder={'nhập vô mô tả'}
              value={productFormData.description}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['quantity']}
              label={'Số lượng'}
              name={'quantity'}
              decimals={false}
              placeholder={'nhập đại số gì đi'}
              value={productFormData.quantity}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['price']}
              label={'Price'}
              name={'price'}
              min={1}
              placeholder={'Giá SP'}
              value={productFormData.price}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          
          <Col xs='12' md='12'>
            <SelectOption
              disabled={user.role === 'ROLE_MERCHANT'}
              error={formErrors['brand']}
              name={'brand'}
              label={'Nhãn hiệu'}
              value={
                user.role === 'ROLE_MERCHANT'
                  ? brands[1]
                  : productFormData.brand
              }
              options={brands}
              handleSelectChange={value => {
                productChange('brand', value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
           <Row xs='12' md ='2'>
           <Input
              type={'file'}
              error={formErrors['file']}
              name={'image'}
              label={'file'}
              placeholder={'Hình ảnh'}
              value={image}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
           </Row>
           
          
            
          </Col>
          <Col xs='12' md='12' className='my-2'>
            <Switch
              id={'active-product'}
              name={'isActive'}
              label={'Khả dụng'}
              checked={productFormData.isActive}
              toggleCheckboxChange={value => productChange('isActive', value)}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-product-actions'>
          <Button type='submit' text='Thêm' />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
