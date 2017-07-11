import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { App } from './containers/App';
import { NewUrlPage } from './containers/NewUrlPage';
import { Layout } from './routes/Layout';
import { configureStore } from './store';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path='/' component={Layout} />
        <Route path='/app' component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
