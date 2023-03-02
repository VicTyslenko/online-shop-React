import * as yup from 'yup';

export const validationSchema = yup.object({
	loginOrEmail: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(4, 'Password should be of minimum 4 characters length')
		.required('Password is required'),
});
