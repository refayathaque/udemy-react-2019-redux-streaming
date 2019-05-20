import streams from 'apis/streams';
import { FETCH_STREAM } from 'actions/types';

const fetchStream = (id) => {
  console.log('Action Creator, FETCH_STREAM')
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    console.log('Action Creator, response:', response.data)

    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    });
  };
};

export default fetchStream
