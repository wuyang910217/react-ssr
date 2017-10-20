import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

export default () => {
  const store = createStore(reudcers, {}, applyMiddleware(thunk));
  return store;
};
