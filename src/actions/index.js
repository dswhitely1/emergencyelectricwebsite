import {
	CONTACT_FORM_VALIDATION,
	RESET_CONTACT_FORM,
	CONTACT_FORM_VALUE_CHANGE_FN,
	CONTACT_FORM_VALUE_CHANGE_LN,
	CONTACT_FORM_VALUE_CHANGE_EM,
	CONTACT_FORM_VALUE_CHANGE_MG,
} from './types';

export const formValidation = value => {
	return {
		type    : CONTACT_FORM_VALIDATION,
		payload : {
			validated : value,
		},
	};
};

export const resetContactForm = () => {
	return {
		type    : RESET_CONTACT_FORM,
		payload : {
			validated : false,
			firstName : '',
			lastName  : '',
			email     : '',
			message   : '',
		},
	};
};
export const valueContactFormChange = (item, value) => {
	switch (item) {
		case 'firstName': {
			return {
				type    : CONTACT_FORM_VALUE_CHANGE_FN,
				payload : { firstName: value },
			};
		}
		case 'lastName': {
			return {
				type    : CONTACT_FORM_VALUE_CHANGE_LN,
				payload : { lastName: value },
			};
		}
		case 'email': {
			return {
				type    : CONTACT_FORM_VALUE_CHANGE_EM,
				payload : { email: value },
			};
		}
		case 'message': {
			return {
				type    : CONTACT_FORM_VALUE_CHANGE_MG,
				payload : { message: value },
			};
		}
		default: {
			return null;
		}
	}
};
