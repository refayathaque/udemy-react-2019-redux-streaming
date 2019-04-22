import React from 'react';
import { MemoryRouter, HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';
// BrowserRouter is the MOST COMPLICATED TO DEPLOY in most settings (there are exceptions to this, SOME deployment services will make deployments with BrowserRouter easy), and this is because most servers will not automatically serve up the `index.html` file in the public folder once it realizes that it does not have any data on requested routes other than "/" (only React servers will automatically serve up `index.html`)
// Default behavior for most servers when it does not have data on routes other than "/" is responding with a 404
// HashRouter solves the issue above, because it will make sure that for every request made to the server the server responds with the "/" route (our index.html file) irrespective of what follows the "#", the backend server will not look at anything after the "#", and only the client/browser will look at what is after the "#"
// I.e., request http://localhost:3000/#/pagetwo will be processed by the server as http://localhost:3000
// Once the React application loads up (by virtue of the backend server responding with the index.html file), React Router will process the value following the "#" and render the component(s) corresponding to the route

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Navigate to Page One</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App
