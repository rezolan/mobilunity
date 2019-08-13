import React from 'react';
import { Formik } from 'formik';
import { loginSchema } from '../api-calls/authorization';

export const LoginForm = ({ onSubmit, isSubmitting }) => {
	console.log(isSubmitting);
	const submitForm = (values, { setSubmitting }) => {
		console.log(values);
		onSubmit(values);
		// onSubmit
	};

	return (
		<Formik
			initialValues={{username: '', password: ''}}
			onSubmit={submitForm}
			validationSchema={loginSchema}
		>
			{props => {
				const {
					values,
					touched,
					errors,
					isValid,
					handleChange,
					handleBlur,
					handleSubmit,
				} = props;
				console.log('isValid', isValid);
				console.log('isSubmitting', isSubmitting);
				return (
					<form onSubmit={handleSubmit}>
						<label htmlFor="usename" style={{ display: 'block' }}>
							User name
						</label>
						<input
							id="username"
							placeholder="User name"
							type="text"
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
							className={
								errors.username && touched.username ? 'text-input error' : 'text-input'
							}
						/>
						{errors.username && touched.username && (
							<div className="input-feedback">{errors.username}</div>
						)}

						<label htmlFor="password" style={{ display: 'block' }}>
							User name
						</label>
						<input
							id="password"
							placeholder="Password"
							type="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							className={
								errors.password && touched.password ? 'text-input error' : 'text-input'
							}
						/>
						{errors.password && touched.password && (
							<div className="input-feedback">{errors.password}</div>
						)}
						<button type="submit" disabled={!isValid || isSubmitting}>
							Submit
						</button>
					</form>
				);
			}}
		</Formik>
	)
};
