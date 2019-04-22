import {
	PERSONAL_DATA_FIRST_NAME,
	PERSONAL_DATA_LAST_NAME,
	PERSONAL_DATA_PERF_NAME,
	PERSONAL_DATA_ADDRESS_ONE,
	PERSONAL_DATA_ADDRESS_TWO,
	PERSONAL_DATA_CITY,
	PERSONAL_DATA_STATE,
	PERSONAL_DATA_ZIPCODE,
	PERSONAL_DATA_PHONE_NUMBER,
	PERSONAL_DATA_ALT_PHONE_NUMBER,
	PERSONAL_DATA_EMAIL,
	PERSONAL_DATA_VALIDATION,
} from '../../actions/types';

const INITIAL_STATE = {
	validated      : false,
	firstName      : '',
	lastName       : '',
	perfName       : '',
	address1       : '',
	address2       : '',
	city           : '',
	state          : 'IN',
	zipCode        : '',
	phoneNumber    : '',
	altPhoneNumber : '',
	email          : '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PERSONAL_DATA_VALIDATION:
			return { ...state, validated: action.payload.validated };
		case PERSONAL_DATA_FIRST_NAME:
			return { ...state, firstName: action.payload.firstName };
		case PERSONAL_DATA_LAST_NAME:
			return { ...state, lastName: action.payload.lastName };
		case PERSONAL_DATA_PERF_NAME:
			return { ...state, perfName: action.payload.perfName };
		case PERSONAL_DATA_ADDRESS_ONE:
			return { ...state, address1: action.payload.address1 };
		case PERSONAL_DATA_ADDRESS_TWO:
			return { ...state, address2: action.payload.address2 };
		case PERSONAL_DATA_CITY:
			return { ...state, city: action.payload.city };
		case PERSONAL_DATA_STATE:
			return { ...state, state: action.payload.state };
		case PERSONAL_DATA_ZIPCODE:
			return { ...state, zipCode: action.payload.zipCode };
		case PERSONAL_DATA_PHONE_NUMBER:
			return { ...state, phoneNumber: action.payload.phoneNumber };
		case PERSONAL_DATA_ALT_PHONE_NUMBER:
			return { ...state, altPhoneNumber: action.payload.altPhoneNumber };
		case PERSONAL_DATA_EMAIL:
			return { ...state, email: action.payload.email };
		default:
			return state;
	}
};
