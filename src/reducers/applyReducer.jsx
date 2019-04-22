import { APPLICATION_ROUTE } from '../actions/types';

const INITIAL_STATE = {
	route           : true,
	btnColorVariant : 'success',
	btnText         : `Apply Now`,
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case APPLICATION_ROUTE:
			if (!action.payload) {
				return {
					...state,
					route           : action.payload,
					btnColorVariant : 'success',
					btnText         : 'Apply Now',
				};
			} else {
				return {
					...state,
					route           : action.payload,
					btnColorVariant : 'warning',
					btnText         : 'Return Home',
				};
			}

		default:
			return state;
	}
};
