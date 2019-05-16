import streams from 'apis/streams';
import { DELETE_STREAM } from 'actions/types';

const deleteStream = (id) => {
  console.log('ACTION CREATOR, deleteStream')
  return async (dispatch) => {
    await streams.delete(`/streams/:${id}`);
    // Not expecting anything back (a response) because we are deleting an object
    // const response = await streams.delete(`/streams/:${id}`);
    // But we are still going to use dispatch to return the id of the object we just deleted, in order to maintain inventory in our application Redux store
    dispatch({
      type: DELETE_STREAM,
      payload: id
    });
  };
};

export default deleteStream
