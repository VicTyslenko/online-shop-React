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
import { Container, Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';

function DropdownRegister({ active, closeFormPages }) {
	return (
		<WrappAnimate id="example-panel" duration={500} height={active}>
			<Container maxWidth="lg">
				<BoxWrapp>
					<Header>
						<span>Enter your details</span>
					</Header>
					<Formik
						initialValues={{
							email: '',
							password: '',
						}}
						// validationSchema={validationSchema}
					>
						<Form>
							<InputsWrapp>
								<InputItem
									variant="standard"
									id="demo-helper-text-misaligned-no-helper"
									label="E-mail"
									type="string"
								/>
								<InputItem
									variant="standard"
									id="demo-helper-text-misaligned-no-helper"
									label="Password"
									type="password"
								/>
							</InputsWrapp>
							<ButtonBlock>
								<Button variant="contained" color="success">
									Log in
								</Button>
							</ButtonBlock>
						</Form>
					</Formik>
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
