import { Field } from 'formik';
// import PropTypes from "prop-types";

function Input({ type, placeholder, name, className }) {
	return <Field type={type} placeholder={placeholder} name={name} className={className} />;
}

export default Input;
