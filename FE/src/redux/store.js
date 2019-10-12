import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
// import sagas and reducer of home screen
import reducers from './reducers';
import rootSaga from './sagas/rootSaga';

import loggingMiddleware from './middlewares/logging';
import storage from "redux-persist/es/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(sagaMiddleware, loggingMiddleware)
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {
    store,
    persistor
}
