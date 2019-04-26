import { SHOW_MESSAGE_DISPLAY, UPDATE_SERVER_RESPONSE } from '../actions/types';

const INITIAL_STATE = {
	messageDisplay : false,
	variant        : 'success',
	message        : `You're message to Emergency Electric Inc. has been successfully sent!`,
	res            : '',
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_MESSAGE_DISPLAY:
			return { ...state, messageDisplay: action.payload.messageDisplay };
		case UPDATE_SERVER_RESPONSE:
			if (action.payload.status === 201) {
				return {
					...state,
					res            : action.payload.statusText,
					messageDisplay : true,
					variant        : 'info',
					message        : `You're message to Emergency Electric Inc. has been successfully sent!`,
				};
			} else {
				return {
					...state,
					res            : action.payload.statusText,
					messageDisplay : true,
					variant        : 'primary',
					message        : `You're message was not sent, please try again in a few moments.`,
				};
			}
		default:
			return state;
	}
};
