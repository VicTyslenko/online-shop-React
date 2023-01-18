import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const validationSchema = yup.object({
	name: yup.string().required('Enter your name').min(2, 'Name is too short'),
	lastName: yup.string().required('Enter your last name').min(2, 'LastName is too short'),
	email: yup.string().email('Not a proper email'),
	password: yup.string().required('Password is required'),
});
