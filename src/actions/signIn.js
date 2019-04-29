import { SIGN_IN } from 'actions/types'

const signIn = (userId) => {
  console.log('ACTION CREATOR, signIn')
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export default signIn
