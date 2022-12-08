/*
 *
 * Newsletter
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Newsletter extends React.PureComponent {
  render() {
    const { email, newsletterChange, subscribeToNewsletter, formErrors } =
      this.props;

    const handleSubmit = event => {
      event.preventDefault();
      subscribeToNewsletter();
    };

    return (
      <div className='newsletter-form'>
        <p>Hãy để  lại Email, chúng tôi sẽ liên hệ với bạn ngay...</p>
        <form onSubmit={handleSubmit}>
          <div className='subscribe'>
            <Input
              type={'text'}
              error={formErrors['email']}
              name={'email'}
              placeholder={'Please Enter Your Email'}
              value={email}
              onInputChange={(name, value) => {
                newsletterChange(name, value);
              }}
              inlineElement={SubscribeButton}
            />
          </div>
        </form>
      </div>
    );
  }
}

const SubscribeButton = (
  <Button type='submit' variant='primary' text='Đăng kí' />
);

const mapStateToProps = state => {
  return {
    email: state.newsletter.email,
    formErrors: state.newsletter.formErrors
  };
};

export default connect(mapStateToProps, actions)(Newsletter);
