import streams from 'apis/streams';
import { CREATE_STREAM } from 'actions/types';

const createStream = (formValues) => {
  console.log('ACTION CREATOR, createStream')
  return async (dispatch, getState) => {
    // getState allows us to access the Redux store state object in action creators
    const { userId } = getState().auth
    const response = await streams.post('/streams', { ...formValues, userId });
    // ^ same as `[userId]: userId`
    console.log('ACTION CREATOR, response:', response.data)

    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
  };
};

export default createStream
