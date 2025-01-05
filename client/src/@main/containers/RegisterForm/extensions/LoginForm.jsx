import { actionFetchAuth } from "@main/store/actions/authActions";
import { Checkbox } from "@mui/material";
import { validationSchema } from "components/Header/components/DropdownRegister/validation";
import { Form, Formik } from "formik";
import { useStoreDispatch } from "hooks/use-store-dispatch";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
	ButtonWrapp,
	CheckBoxWrapp,
	CssTextField,
	Description,
	InputsWrapp,
	LoginWrapper,
	StyledButton,
} from "../StyledRegisterForm";
import { useFormLogin } from "../hooks";

export const LoginForm = () => {
	const dispatch = useStoreDispatch();

	const { errorMessage } = useFormLogin();

	const navigate = useNavigate();

	return (
		<>
			<Formik
				initialValues={{
					loginOrEmail: "",
					password: "",
				}}
				validationSchema={validationSchema}
				onSubmit={async (values, { resetForm }) => {
					const data = await dispatch(actionFetchAuth(values));

					if (!data.error) {
						navigate("/");
						toast.success("Login successfull!");
						resetForm();
					}
				}}
			>
				{props => (
					<LoginWrapper>
						<Description>Please enter your account details to log in</Description>

						<Form onSubmit={props.handleSubmit}>
							<InputsWrapp>
								<CssTextField
									variant="standard"
									label="E-mail"
									fullWidth
									name="loginOrEmail"
									value={props.values.loginOrEmail}
									onChange={props.handleChange}
									error={props.touched.loginOrEmail && Boolean(props.errors.loginOrEmail)}
									helperText={props.touched.loginOrEmail && props.errors.loginOrEmail}
								/>
								<CssTextField
									variant="standard"
									label="Password"
									fullWidth
									name="password"
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
							<CheckBoxWrapp>
								<Checkbox
									sx={{
										"& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)": {
											color: "white",
										},
									}}
								/>
								<p className="box-text">Keep me signed in</p>
							</CheckBoxWrapp>

							<ButtonWrapp>
								<StyledButton type="submit">LOG IN</StyledButton>
							</ButtonWrapp>
						</Form>
					</LoginWrapper>
				)}
			</Formik>
		</>
	);
};
