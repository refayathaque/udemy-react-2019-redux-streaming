import streams from 'apis/streams';
import { FETCH_STREAM } from 'actions/types';

const fetchStream = (id) => {
  console.log('ACTION CREATOR, fetchStream')
  return async (dispatch) => {
    const response = await streams.get(`/streams/:${id}`);
    console.log('ACTION CREATOR, response:', response.data)

    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    });
  };
};

export default fetchStream
