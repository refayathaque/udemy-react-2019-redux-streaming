export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// Why have a separate types.js file?
// Best practice to define every action type as a string constant
// It helps keep the naming consistent because all action types are gathered in a single place.
// Sometimes you want to see all existing actions before working on a new feature. It may be that the action you need was already added by somebody on the team, but you didn't know.
// The list of action types that were added, removed, and changed in a Pull Request helps everyone on the team keep track of scope and implementation of new features.
// If you make a typo when referencing an action.type variable you will see an error, if you make a typo on an action.type string literal you will NOT see an error (i.e., defining actions as string constants makes it easier to find mistakes)
