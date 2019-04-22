import { combineReducers } from 'redux';
import contactFormReducer from './contactFormReducer';
import messageDisplayReducer from './messageDisplayReducer';
import applyReducer from './applyReducer';
import persDataReducer from './application/persDataReducer';

export default combineReducers({
	contactForm      : contactFormReducer,
	messageDisplay   : messageDisplayReducer,
	applicationRoute : applyReducer,
	appPersData      : persDataReducer,
});
