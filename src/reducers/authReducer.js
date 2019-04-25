import { SIGN_IN, SIGN_OUT } from 'actions/types'

const INITIAL_STATE = {
  isSignedIn: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log('REDUCER, authReducer, action.type: SIGN_IN')
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      console.log('REDUCER, authReducer, action.type: SIGN_OUT')
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
