/*
 *
 * ResetPassword actions
 *
 */

import { push } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  RESET_PASSWORD_CHANGE,
  RESET_PASSWORD_RESET,
  SET_RESET_PASSWORD_FORM_ERRORS
} from './constants';

import { signOut } from '../Login/actions';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';

export const resetPasswordChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: RESET_PASSWORD_CHANGE,
    payload: formData
  };
};

export const resetPassword = token => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        password: 'required|min:6',
        confirmPassword: 'required|min:6|same:password'
      };
      const user = getState().resetPassword.resetFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        'required.password': 'Password Không được bỏ trống.',
        'min.password': 'Password must be at least 6 characters.',
        'required.confirmPassword': 'Mật khẩu mới Không được bỏ trống.',
        'min.confirmPassword':
          'Mật khẩu mới must be at least 6 characters.',
        'same.confirmPassword':
          'Mật khẩu mới and password fields must match.'
      });

      if (!isValid) {
        return dispatch({
          type: SET_RESET_PASSWORD_FORM_ERRORS,
          payload: errors
        });
      }

      const response = await axios.post(`http://localhost:3000/api/auth/reset/${token}`, user);
      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success == true) {
        dispatch(push('/login'));
      }

      dispatch(success(successfulOptions));
      dispatch({ type: RESET_PASSWORD_RESET });
    } catch (error) {
      const title = `Please try to reset again!`;
      handleError(error, dispatch, title);
    }
  };
};

export const resetAccountPassword = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        password: 'required|min:6',
        confirmPassword: 'required|min:6'
      };

      const user = getState().resetPassword.resetFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        'required.password': 'Password Không được bỏ trống.',
        'min.password': 'Password must be at least 6 characters.',
        'required.confirmPassword': 'Mật khẩu mới Không được bỏ trống.',
        'min.confirmPassword': 'Mật khẩu mới must be at least 6 characters.'
      });

      if (!isValid) {
        return dispatch({
          type: SET_RESET_PASSWORD_FORM_ERRORS,
          payload: errors
        });
      }

      const response = await axios.post(`http://localhost:3000/api/auth/reset`, user);
      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success === true) {
        dispatch(signOut());
      }

      dispatch(success(successfulOptions));
      dispatch({ type: RESET_PASSWORD_RESET });
    } catch (error) {
      const title = `Please try to reset again!`;
      handleError(error, dispatch, title);
    }
  };
};
