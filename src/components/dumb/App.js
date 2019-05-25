import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';
// ^ Absolute import not working for some reason
import Header from 'components/dumb/Header';
import StreamList from 'components/streams/smart/StreamList';
import StreamCreate from 'components/streams/smart/StreamCreate';
import StreamShow from 'components/streams/smart/StreamShow';
import StreamEdit from 'components/streams/smart/StreamEdit';
import StreamDelete from 'components/streams/smart/StreamDelete';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={StreamList} />
            <Route path="/streams/new" exact={true} component={StreamCreate} />
            <Route path="/streams/:id" exact={true} component={StreamShow} />
            <Route path="/streams/edit/:id" exact={true} component={StreamEdit} />
            <Route path="/streams/delete/:id" exact={true} component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

// Notes:

// BrowserRouter is the MOST COMPLICATED TO DEPLOY in most settings (there are exceptions to this, SOME deployment services will make deployments with BrowserRouter easy), and this is because most servers will not automatically serve up the `index.html` file in the public folder once it realizes that it does not have any data on requested routes other than "/" (only React servers will automatically serve up `index.html`)

// Default behavior for most servers when it does not have data on routes other than "/" is responding with a 404

// HashRouter solves the issue above, because it will make sure that for every request made to the server the server responds with the "/" route (our index.html file) irrespective of what follows the "#", the backend server will not look at anything after the "#", and only the client/browser will look at what is after the "#"

// I.e., request http://localhost:3000/#/pagetwo will be processed by the server as http://localhost:3000
// Test this ^ out by switching over to a `HashRouter` in the functional component below, try the different routes and monitor the Chrome Network logs (select 'All' types)

// Once the React application loads up (by virtue of the backend server responding with the index.html file), React Router will process the value following the "#" and render the component(s) corresponding to the route

// "If you are using a dynamic server that can handle dynamic URLs then you need to use the BrowserRouter component but if you are using a server that only serves static files then a HashRouter component is what to be used in this case." - https://www.techiediaries.com/react-router-dom-v4/

// MemoryRouter - "Keeps the history of your "URL" in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native." - https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md

// `MemoryRouter` and `HashRouter` must be included in the list of named imports from 'react-router-dom' above

// `Switch` - Renders the first child <Route> or <Redirect> that matches the location ONLY. <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively.
// <Route path="/about" component={About}/>
// <Route path="/:user" component={User}/>
// <Route component={NoMatch}/>
// If the URL is /about, then <About>, <User> (because of the WILDCARD `/:user`), and <NoMatch> will all render because they all match the path. Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t want to also match /:user (or show our “404” page). Now, if we’re at /about, <Switch> will start looking for a matching <Route>. <Route path="/about"/> will match and <Switch> will stop looking for matches and render <About>. Similarly, if we’re at /michael then <User> will render.
// ^ ORDER MATTERS HERE
