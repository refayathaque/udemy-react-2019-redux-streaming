import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
  // React-Router-DOM will also pass props to components when you use `Link` to navigate beetween components, this happens because `Route` components are rendering the components in your application (with the `Route` component parent component being the `Router` component)
  console.log(props)
  return (
    <div>
      StreamEdit
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // `ownProps` is the reference to the props object that shows up inside of the StreamEdit component above, in this case it will be the props passed down by React-Router-DOM
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {})(StreamEdit);
