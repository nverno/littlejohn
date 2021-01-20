import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  // default autoMergeLeve1
  // stateReconciler: 
};

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    // rootReducer,
    persistedReducer,
    preloadedState,
    (process.env.NODE_ENV !== 'production'
     ? require('redux-devtools-extension').composeWithDevTools(
       applyMiddleware(...middlewares))
     : applyMiddleware(...middlewares))
  );

  return {
    store,
    persistor: persistStore(store)
  };
};

export default configureStore;
