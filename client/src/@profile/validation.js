import * as yup from "yup";

export const validationDeliverySchema = yup.object({
	firstName: yup.string().required("Enter your first name").min(2, "Name is too short"),

	lastName: yup.string().required("Enter your last name").min(2, "LastName is too short"),
	email: yup.string().required("Email is required").email("Enter a valid email"),

	address: yup.string().required("Address is required"),
	mobile: yup.number().required("Phone number is required").min(5, "number is too short"),
});
