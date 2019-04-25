import { SIGN_OUT } from 'actions/types'

const signOut = () => {
  console.log('ACTION CREATOR, signOut')
  return {
    type: SIGN_OUT
  };
};

export default signOut
