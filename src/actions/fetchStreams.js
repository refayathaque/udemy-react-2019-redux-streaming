import streams from 'apis/streams';
import { FETCH_STREAMS } from 'actions/types';

const fetchStreams = () => {
  console.log('ACTION CREATOR, fetchStreams')
  return async (dispatch) => {
    const response = await streams.get('/streams');
    console.log('ACTION CREATOR, response:', response.data)

    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    });
  };
};

export default fetchStreams
