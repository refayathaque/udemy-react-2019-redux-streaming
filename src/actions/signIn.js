import { SIGN_IN } from 'actions/types'

const signIn = () => {
  console.log('ACTION CREATOR, signIn')
  return {
    type: SIGN_IN
  };
};

export default signIn
