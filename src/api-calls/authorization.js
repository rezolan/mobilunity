import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { object, string } from 'yup';
import { zipObject, map } from 'lodash';

export const loginSchema = object().shape({
	username: string().required(),
	password: string().required().min(6)
});

export const signIn = async (username, password) =>
	wrapCall(axios.post('/login', { username, password }));

export const signOut = async () => wrapCall(axios.post('/logout', {}));

const wrapCall = async promise => {
	try {
		return await promise;
	} catch ({ response }) {
		throw response;
	}
}

const mock = new MockAdapter(axios);
const accounts = { "a.serdukov": "123456" };

mock.onPost("/logout").reply(200, {});

mock.onPost("/login").reply(({ data }) => {
	const payload = JSON.parse(data);
	const { username, password } = payload;

	try {
		loginSchema.validateSync(payload, { abortEarly: false });
	} catch ({ inner }) {
		const errors = zipObject(
			map(inner, 'path'),
			map(inner, 'message')
		);

		return [400, errors];
	}

	if (!(username in accounts)) {
		return [401, {
			username: `User "${username}" not found`
		}];
	}

	if (password !== accounts[username]) {
		return [401, {
			password: `Invalid password`
		}];
	}

	return [200, { username }];
});
