import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from 'actions/types';

const streamReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_STREAM:
      console.log('streamReducer, action.type: CREATE_STREAM')
      return { ...state, [action.payload.id]: action.payload };
      // ES6 Key Interpolation Syntax / Dynamic Property Keys
    case FETCH_STREAMS:
      console.log('streamReducer, action.type: FETCH_STREAMS')
      return { ...state, ..._.mapKeys(action.payload, 'id') };
      // Spread operator with objects is used to make a copy of an existing object or to make a new object with more properties
      // With spread operators on both `state` and `mapKeys` were are "combining" the two objects
    case FETCH_STREAM:
      console.log('streamReducer, action.type: FETCH_STREAM')
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      console.log('streamReducer, action.type: DELETE_STREAM')
      return _.omit(state, action.payload);
    case EDIT_STREAM:
      console.log('streamReducer, action.type: EDIT_STREAM')
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  };
};

export default streamReducer;
