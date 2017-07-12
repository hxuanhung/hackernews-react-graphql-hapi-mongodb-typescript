import 'rxjs';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { App } from './containers/App';
import {User} from './components/User';
// import FeedPage from './containers/FeedPage';
import NewUrlPage from './containers/NewUrlPage';
import { client } from './graphql/config';
import { Layout } from './routes/Layout';
import { configureStore } from './store';
import { initFirebase } from './services/auth.service';
export const firebaseApp = initFirebase();
// Styles
import '../node_modules/toastr/build/toastr.min.css';
const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path='/' component={Layout} />
          <Route path='/app' component={App} />
          <Route path='/add' component={NewUrlPage} />
           <Route path='/feed' component={User} />
        </div>
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);
