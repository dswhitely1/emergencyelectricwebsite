import { combineReducers } from 'redux';
import contactFormReducer from './contactFormReducer';
import messageDisplayReducer from './messageDisplayReducer';
export default combineReducers({
	contactForm    : contactFormReducer,
	messageDisplay : messageDisplayReducer,
});
