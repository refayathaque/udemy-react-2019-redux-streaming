import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // `return` statement is specific to React Portals, different from regular functional/dumb components
  // ReactDOM function of `createPortal` is similar in syntax to the `render` function in `index.js` in the `src` folder, it takes two arguments and one of the is the `document.querySelector` function (reference to an html element in the `index.html` file in the `public` folder)
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={stopPropagation} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

// Notes:

// Anytime that we render our modal component on the screen, rather than showing up as a direct child of the parent component (`id="root"`), it will be rendered into the `div` with `id="modal"` in our `index.html` file

// Event Propagation

// Clicking anywhere, within the modal (including the two buttons we have in the modal) and outside the modal, navigates us away to the StreamList component, and we do not want this behavior, the user should only be taken to the StreamList component if they click anywhere OUTSIDE the modal and not inside (except for the two buttons)

// ^ happens due to Event Propagation, if we ever trigger an event on some child element (e.g., a click), and that child element does not handle that event, then the event is essentially going to bubble up to some parent element until it gets caught by an event handler
