import streams from 'apis/streams';
import { FETCH_STREAMS } from 'actions/types';

const fetchStreams = () => {
  console.log('Action Creator, FETCH_STREAMS')
  return async (dispatch) => {
    const response = await streams.get('/streams');
    console.log('Action Creator, response:', response.data)

    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    });
  };
};

export default fetchStreams
