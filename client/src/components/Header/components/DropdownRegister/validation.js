import * as yup from 'yup';

export const validationSchema = yup.object({
	userName: yup.string().required('Enter your name').min(2, 'Name is too short'),
	password: yup.string().required('Password is required'),
});
