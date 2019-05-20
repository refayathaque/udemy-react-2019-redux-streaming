import streams from 'apis/streams';
import { EDIT_STREAM } from 'actions/types';
import history from '../history';
// ^ Absolute import not working for some reason

const editStream = (formValues, id) => {
  console.log('Action Creator, EDIT_STREAM')
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    console.log('Action Creator, response:', response.data)

    dispatch({
      type: EDIT_STREAM,
      payload: response.data
    });
    history.push('/');
    // ^ Programmatic navigation
  };
};

export default editStream
