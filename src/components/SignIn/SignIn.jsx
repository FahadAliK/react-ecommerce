import React, { useState } from 'react';
import Layout from '../../shared/Layout';
import { Formik } from 'formik';
import '../SignUp/SignUp.styles.scss';
import { withRouter } from 'react-router';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn({ history: { push } }) {
	const [error, setError] = useState(null);
	const initialValues = {
		email: '',
		password: '',
	};
	async function handleSignIn(values, { setSubmitting }) {
		const { email, password } = values;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setSubmitting(false);
			push('/shop');
		} catch (error) {
			console.log(error);
			setSubmitting(false);
			setError(error);
		}
	}
	return (
		<Layout>
			<h1>Sign In</h1>
			<div className="form-container">
				<Formik
					initialValues={initialValues}
					onSubmit={(values, { setSubmitting }) => {
						handleSignIn(values, { setSubmitting });
					}}
				>
					{({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
						const { email, password } = errors;
						return (
							<form onSubmit={handleSubmit}>
								<div>
									<input
										type={'email'}
										name="email"
										value={values.email}
										onChange={handleChange}
										placeholder="Email"
										className={'nomad-input' + (email ? 'error' : '')}
									/>
								</div>
								<div>
									<input
										type={'password'}
										name="password"
										value={values.password}
										onChange={handleChange}
										placeholder="Password"
										className={'nomad-input' + (password ? 'password' : '')}
									/>
								</div>
								<div className="submit-btn">
									<button
										type="submit"
										disabled={isSubmitting}
										className="button is-black nomad-btn submit"
									>
										{isSubmitting ? 'Signing In...' : 'Sign In'}
									</button>
								</div>
								<div className="error-message">
									{error && <p>{error.message}</p>}
								</div>
							</form>
						);
					}}
				</Formik>
			</div>
		</Layout>
	);
}

export default withRouter(SignIn);
