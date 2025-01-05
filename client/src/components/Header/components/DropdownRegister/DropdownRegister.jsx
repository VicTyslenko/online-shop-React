import { clearErrorAuth } from "@main/store/slices/authSlice";
import { closeModal } from "@main/store/slices/modalSlice";
import { Button, Container } from "@mui/material";
import { Formik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { actionFetchAuth } from "../../../../@main/store/actions/authActions";
import { errorDataAuth } from "../../../../@main/store/selectors/authSelector";
import {
	BoxWrapp,
	ButtonBlock,
	FormPages,
	Header,
	InputItem,
	InputsWrapp,
	LinkItem,
	WrappAnimate,
} from "./StyledDropdownRegister";
import { validationSchema } from "./validation";

function DropdownRegister({ active }) {
	const dispatch = useDispatch();
	let errorMessage = useSelector(errorDataAuth);

	useEffect(() => {
		dispatch(clearErrorAuth());
	}, [active, dispatch]);

	return (
		<WrappAnimate id="example-panel" duration={500} height={active}>
			<Container maxWidth="lg">
				<BoxWrapp>
					<Header>
						<span className="details">Enter your details</span>
					</Header>
					<Formik
						initialValues={{
							loginOrEmail: "",
							password: "",
						}}
						validationSchema={validationSchema}
						onSubmit={async (values, { resetForm }) => {
							const data = await dispatch(actionFetchAuth(values));

							if (!data.error) {
								toast.success("Login successful!");
								dispatch(closeModal());
								dispatch(clearErrorAuth());
								resetForm();
							}
						}}
					>
						{props => {
							return (
								<form onSubmit={props.handleSubmit}>
									<InputsWrapp>
										<InputItem
											variant="standard"
											name="loginOrEmail"
											label="E-mail"
											value={props.values.loginOrEmail}
											onChange={props.handleChange}
											error={props.touched.loginOrEmail && Boolean(props.errors.loginOrEmail)}
											helperText={props.touched.loginOrEmail && props.errors.loginOrEmail}
										/>
										<InputItem
											variant="standard"
											name="password"
											label="Password"
											type="password"
											value={props.values.password}
											onChange={props.handleChange}
											error={props.touched.password && Boolean(props.errors.password)}
											helperText={props.touched.password && props.errors.password}
										/>
									</InputsWrapp>

									{errorMessage && !Object.keys(props.errors).length && (
										<span className="error-message">{Object.values(errorMessage)}</span>
									)}

									<ButtonBlock>
										<Button variant="contained" color="success" type="submit">
											Log in
										</Button>
									</ButtonBlock>
								</form>
							);
						}}
					</Formik>

					<FormPages>
						Not registered yet ?
						<LinkItem to="/login-form" onClick={() => dispatch(closeModal())}>
							Sing Up
						</LinkItem>
					</FormPages>
				</BoxWrapp>
			</Container>
		</WrappAnimate>
	);
}

export default DropdownRegister;
