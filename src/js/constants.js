import * as yup from 'yup';

export const personalDataSchema = yup.object({
	firstName      : yup.string().required('Required'),
	lastName       : yup.string().required('Required'),
	prefName       : yup.string(),
	address1       : yup.string().required('Required'),
	address2       : yup.string(),
	city           : yup.string().required('Required'),
	state          : yup.string().required('Required'),
	zipCode        : yup
		.string()
		.matches(/^[0-9]{5}(?:-[0-9]{4})?$/, { message: 'Invalid Zip Code' })
		.required('Required'),
	phoneNumber    : yup
		.string()
		.matches(/^[0-9]{10}$/, { message: 'Invalid Phone Number' })
		.required('Required'),
	altPhoneNumber : yup.string().matches(/^[0-9]{10}$/, {
		message            : 'Invalid Phone Number',
		excludeEmptyString : true,
	}),
	email          : yup
		.string()
		.email('Invalid Email Address')
		.required('Required'),
});

export const personalDataSchema2 = yup.object({
	chkFullTime : yup.string(),
});
