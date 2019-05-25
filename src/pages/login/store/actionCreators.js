import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('http://yapi.demo.qunar.com/mock/67688/api/login?accout=' + accout + '&password=' + password).then((res) => {
			const result = res.data;
			if (result.code === "1000") {
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}