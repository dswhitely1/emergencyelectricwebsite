import {
	CONTACT_FORM_VALIDATION,
	RESET_CONTACT_FORM,
	CONTACT_FORM_VALUE_CHANGE_FN,
	CONTACT_FORM_VALUE_CHANGE_LN,
	CONTACT_FORM_VALUE_CHANGE_EM,
	CONTACT_FORM_VALUE_CHANGE_MG,
} from '../actions/types';

const INITIAL_STATE = {
	validated : false,
	firstName : '',
	lastName  : '',
	email     : '',
	message   : '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CONTACT_FORM_VALIDATION:
			return {
				...state,
				validated: action.payload.validated,
				res: action.payload.res,
			};
		case RESET_CONTACT_FORM:
			return {
				...state,
				validated : action.payload.validated,
				firstName : action.payload.firstName,
				lastName  : action.payload.lastName,
				email     : action.payload.email,
				message   : action.payload.message,
			};
		case CONTACT_FORM_VALUE_CHANGE_FN:
			return { ...state, firstName: action.payload.firstName };
		case CONTACT_FORM_VALUE_CHANGE_LN:
			return { ...state, lastName: action.payload.lastName };
		case CONTACT_FORM_VALUE_CHANGE_EM:
			return { ...state, email: action.payload.email };
		case CONTACT_FORM_VALUE_CHANGE_MG:
			return { ...state, message: action.payload.message };
		default:
			return state;
	}
};
