import React, { useState } from 'react';
import Layout from '../../shared/Layout';
import { Formik } from 'formik';
import { auth, createUserProfileDocument } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import './SignUp.styles.scss';
import { withRouter } from 'react-router';

function validate(values) {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Invaid email address';
	}
	if (!values.firstname) {
		errors.firstname = 'Required';
	}
	if (!values.password) {
		errors.password = 'Required';
	}
}

function SignUp({ history: { push } }) {
	const [error, setError] = useState(null);
	const initialValues = {
		firstname: '',
		email: '',
		password: '',
	};

	async function handleSignUp(values, { setSubmitting }) {
		const { firstname, email, password } = values;
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await createUserProfileDocument(user, { displayName: firstname });
			push('/shop');
		} catch (error) {
			console.log(error.message);
			setError(error);
		}
		setSubmitting(false);
	}
	return (
		<Layout>
			<div className="sign-up">
				<h1>Sign Up</h1>
				<div className="form-container">
					<Formik
						validate={validate}
						initialValues={initialValues}
						onSubmit={(values, { setSubmitting }) => {
							handleSignUp(values, { setSubmitting });
						}}
					>
						{({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
							const { firstname, email, password } = errors;
							return (
								<form onSubmit={handleSubmit}>
									<div>
										<input
											type={'text'}
											name="firstname"
											onChange={handleChange}
											value={values.firstname}
											placeholder="First Name"
											className={'nomad-input' + (firstname ? 'error' : '')}
										/>
									</div>
									<div>
										<input
											type={'email'}
											name="email"
											onChange={handleChange}
											value={values.email}
											placeholder="Email"
											className={'nomad-input' + (email ? 'error' : '')}
										/>
									</div>
									<div>
										<input
											type={'password'}
											name="password"
											onChange={handleChange}
											value={values.password}
											placeholder="Password"
											className={'nomad-input' + (password ? 'error' : '')}
										/>
									</div>
									<div className="submit-btn">
										<button
											type="submit"
											disabled={isSubmitting}
											className="button is-black nomad-btn submit"
										>
											{isSubmitting ? 'Signing Up...' : 'Sign Up'}
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
			</div>
		</Layout>
	);
}

export default withRouter(SignUp);
