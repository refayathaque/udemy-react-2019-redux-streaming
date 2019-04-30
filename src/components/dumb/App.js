import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// BrowserRouter is the MOST COMPLICATED TO DEPLOY in most settings (there are exceptions to this, SOME deployment services will make deployments with BrowserRouter easy), and this is because most servers will not automatically serve up the `index.html` file in the public folder once it realizes that it does not have any data on requested routes other than "/" (only React servers will automatically serve up `index.html`)
// Default behavior for most servers when it does not have data on routes other than "/" is responding with a 404
// HashRouter solves the issue above, because it will make sure that for every request made to the server the server responds with the "/" route (our index.html file) irrespective of what follows the "#", the backend server will not look at anything after the "#", and only the client/browser will look at what is after the "#"
// I.e., request http://localhost:3000/#/pagetwo will be processed by the server as http://localhost:3000
// Test this ^ out by switching over to a `HashRouter` in the functional component below, try the different routes and monitor the Chrome Network logs (select 'All' types)
// Once the React application loads up (by virtue of the backend server responding with the index.html file), React Router will process the value following the "#" and render the component(s) corresponding to the route
// "If you are using a dynamic server that can handle dynamic URLs then you need to use the BrowserRouter component but if you are using a server that only serves static files then a HashRouter component is what to be used in this case." - https://www.techiediaries.com/react-router-dom-v4/
// MemoryRouter - "A <Router> that keeps the history of your "URL" in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native." - https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md
// `MemoryRouter` and `HashRouter` must be included in the list of named imports from 'react-router-dom' above
import Header from 'components/dumb/Header';
import StreamList from 'components/streams/StreamList';
import StreamCreate from 'components/streams/smart/StreamCreate';
import StreamShow from 'components/streams/StreamShow';
import StreamEdit from 'components/streams/StreamEdit';
import StreamDelete from 'components/streams/StreamDelete';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact={true} component={StreamList} />
          <Route path="/streams/new" exact={true} component={StreamCreate} />
          <Route path="/streams/show" exact={true} component={StreamShow} />
          <Route path="/streams/edit" exact={true} component={StreamEdit} />
          <Route path="/streams/delete" exact={true} component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
