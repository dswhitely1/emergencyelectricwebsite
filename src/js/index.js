export const validate = values => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = 'First Name is Required';
	}
	if (!values.lastName) {
		errors.lastName = 'Last Name is Required';
	}
	if (!values.email) {
		errors.email = 'Email is Required';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid E-Mail Address';
	}
	return errors;
};
