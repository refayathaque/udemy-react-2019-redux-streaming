import streams from 'apis/streams';
import { CREATE_STREAM } from 'actions/types';

const createStream = (formValues) => {
  console.log('ACTION CREATOR, createStream')
  return async (dispatch) => {
    const response = await streams.post('/streams', formValues);
    console.log('ACTION CREATOR, response:', response.data)
    
    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
  };
};

export default createStream
