import streams from 'apis/streams';
import { CREATE_STREAM } from 'actions/types';
import history from '../history';
// ^ Absolute import not working for some reason

const createStream = (formValues) => {
  console.log('ACTION CREATOR, createStream')
  return async (dispatch, getState) => {
    // Redux Thunk `getState` allows us to access the Redux store state object in action creators
    const { userId } = getState().auth
    const response = await streams.post('/streams', { ...formValues, userId });
    // ^ same as `[userId]: userId`
    console.log('ACTION CREATOR, response:', response.data)

    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
    history.push('/')
    // ^ Programmatic navigation
  };
};

export default createStream
