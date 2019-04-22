import {
	APPLICATION_ROUTE,
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
} from '../types';

export const applyClick = value => {
	return {
		type    : APPLICATION_ROUTE,
		payload : value,
	};
};

export const personalDataValidation = value => {
	return {
		type    : PERSONAL_DATA_VALIDATION,
		payload : { validated: value },
	};
};

export const valueApplicationPersData = (item, value) => {
	switch (item) {
		case 'firstName':
			return {
				type    : PERSONAL_DATA_FIRST_NAME,
				payload : { firstName: value },
			};
		case 'lastName':
			return {
				type    : PERSONAL_DATA_LAST_NAME,
				payload : { lastName: value },
			};
		case 'perfName':
			return {
				type    : PERSONAL_DATA_PERF_NAME,
				payload : { perfName: value },
			};
		case 'address1':
			return {
				type    : PERSONAL_DATA_ADDRESS_ONE,
				payload : { address1: value },
			};
		case 'address2':
			return {
				type    : PERSONAL_DATA_ADDRESS_TWO,
				payload : { address2: value },
			};
		case 'city':
			return { type: PERSONAL_DATA_CITY, payload: { city: value } };
		case 'state':
			return { type: PERSONAL_DATA_STATE, payload: { state: value } };
		case 'zipCode':
			return { type: PERSONAL_DATA_ZIPCODE, payload: { zipCode: value } };
		case 'phoneNumber':
			return {
				type    : PERSONAL_DATA_PHONE_NUMBER,
				payload : { phoneNumber: value },
			};
		case 'altPhoneNumber':
			return {
				type    : PERSONAL_DATA_ALT_PHONE_NUMBER,
				payload : { altPhoneNumber: value },
			};
		case 'email':
			return { type: PERSONAL_DATA_EMAIL, payload: { email: value } };
		default:
			return null;
	}
};
