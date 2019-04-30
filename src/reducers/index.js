import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Named import is being renamed on the fly
import authReducer from 'reducers/authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
