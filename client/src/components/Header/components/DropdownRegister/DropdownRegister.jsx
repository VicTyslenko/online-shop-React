import {
	WrappAnimate,
	BoxWrapp,
	Header,
	InputItem,
	ButtonBlock,
	FormPages,
	LinkItem,
	InputsWrapp,
} from './StyledDropdownRegister';
import { validationSchema } from './validation';
import { Container, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchAuth } from '../../../../@main/store/actions/authActions';
import { isAuthSelector } from '../../../../@main/store/selectors/authSelector';

function DropdownRegister({ active, closeFormPages }) {
	const dispatch = useDispatch();
	const isAuth = useSelector(isAuthSelector);

	const formik = useFormik({
		initialValues: {
			loginOrEmail: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			dispatch(actionFetchAuth(values));
		},
	});

	return (
		<WrappAnimate id="example-panel" duration={500} height={active}>
			<Container maxWidth="lg">
				<BoxWrapp>
					<Header>
						<span>Enter your details</span>
					</Header>
					<form onSubmit={formik.handleSubmit}>
						<InputsWrapp>
							<InputItem
								variant="standard"
								name="loginOrEmail"
								label="E-mail"
								value={formik.values.loginOrEmail}
								onChange={formik.handleChange}
								error={formik.touched.loginOrEmail && Boolean(formik.errors.loginOrEmail)}
								helperText={formik.touched.loginOrEmail && formik.errors.loginOrEmail}
							/>
							<InputItem
								variant="standard"
								name="password"
								label="Password"
								type="password"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
							/>
						</InputsWrapp>
						<ButtonBlock>
							<Button variant="contained" color="success" type="submit">
								Log in
							</Button>
						</ButtonBlock>
					</form>

					<FormPages>
						Not registered yet ?
						<LinkItem to="/login-form" onClick={() => closeFormPages()}>
							Sing Up
						</LinkItem>
					</FormPages>
				</BoxWrapp>
			</Container>
		</WrappAnimate>
	);
}

export default DropdownRegister;
