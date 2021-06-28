import axios from 'axios';
import * as types from '../types';
import { config } from '../../config/keys';
import { returnErrors } from './errorActions';

// action function to login user
export const login = ({ username, password }) => dispatch => {
	//header (config)
	const headerConfig = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	//Request body
	const body = JSON.stringify({ username, password });

	dispatch({
		type: types.ATTEMPT_LOGIN
	})

	axios.post(`${config.BEHOST}/api/authenticateuser`, body, headerConfig)
		.then(res => dispatch({
			type: types.LOGIN_SUCCESS,
			payload: res.data
		}))
		.catch(err => {
			err.response && dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
			dispatch({
				type: types.LOGIN_FAIL
			})
			dispatch({
				type: types.ATTEMPT_LOGIN_FAILED
			})
			window.setTimeout(() => {
				dispatch({
					type: types.RESET_LOGIN_FAILED
				})
			}, 3000)
		})

}