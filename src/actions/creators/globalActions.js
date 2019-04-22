import { SHOW_MESSAGE_DISPLAY, UPDATE_MESSAGE_DISPLAY } from '../types';

export const showMessageDisplay = value => {
	return {
		type    : SHOW_MESSAGE_DISPLAY,
		payload : { messageDisplay: value },
	};
};

export const updateMessageDisplay = (color, message, displayMessage) => {
	return {
		type    : UPDATE_MESSAGE_DISPLAY,
		payload : {
			messageDisplay : displayMessage,
			variant        : color,
			message        : message,
		},
	};
};
