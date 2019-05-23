import React from 'react';
import Modal from 'components/dumb/Modal';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream"
        actions={actions}
      />
    </div>
  );
};


export default StreamDelete;

// Notes:

// React Fragment

// Essentially a JSX looking element that allows us to return multiple elements (i.e., assign multiple elements to a single variable like how we have above with `actions`), but when it gets rendered to the screen it does not actually produce any HTML

// Can be thought of as an invisible element that has no impact on the DOM

// Used to circumvent issues (mostly around CSS styling) arising when you want to return multiple elements to a div, but React forces you to wrap the elements in another div, in essence forcing you to place your elements in a "div within a div"

// You now do not need to have a "div within a div" with React Fragments, so you do not need to do what is below

{/* <div>
  <button className="ui button negative">Delete</button>
  <button className="ui button">Cancel</button>
</div> */}
