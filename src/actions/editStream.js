import streams from 'apis/streams';
import { EDIT_STREAM } from 'actions/types';

const editStream = (formValues, id) => {
  console.log('Action Creator, EDIT_STREAM')
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    console.log('Action Creator, response:', response.data)

    dispatch({
      type: EDIT_STREAM,
      payload: response.data
    });
  };
};

export default editStream
