import {
    AsyncStorage,
    Platform,
} from 'react-native'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import apolloClient from  './apolloConfig'

let middlewareApplied;
const logger = createLogger();

middlewareApplied = applyMiddleware(apolloClient.middleware(), thunk, logger);

const store = createStore(rootReducer, {},
    compose(
        autoRehydrate(),
        middlewareApplied,
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ));
persistStore(store, {
    storage: AsyncStorage,
    whitelist: ['apollo','autoRehydrated','clapitAccountData','drawer', /*'navigationState',*/ 'newNotifications', 'preferences',]
}).purge([]);

export default store;