import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from 'actions/types';

const streamReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAMS:
    console.log('action.type: FETCH_STREAMS, action.payload:', action.payload)
    return { ...state, ..._.mapKeys(action.payload, 'id') };
    // Spread operator with objects is used to make a copy of an existing object or to make a new object with more properties
    // With spread operators on both `state` and `mapKeys` we are merging the two objects
    case CREATE_STREAM:
      console.log('action.type: CREATE_STREAM, action.payload:', action.payload)
      return { ...state, [action.payload.id]: action.payload };
      // ES6 Key Interpolation Syntax / Dynamic Property Keys
    case FETCH_STREAM:
      console.log('action.type: FETCH_STREAM, action.payload:', action.payload)
      return { ...state, [action.payload.id]: action.payload };
      case EDIT_STREAM:
      console.log('action.type: EDIT_STREAM, action.payload:', action.payload)
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      console.log('action.type: DELETE_STREAM, action.payload:', action.payload)
      return _.omit(state, action.payload);
    default:
      return state;
  };
};

export default streamReducer;
