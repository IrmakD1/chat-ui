import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import { logger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'

import reducer from '../reducers'


const configureStore = () => {
    const persistConfig = {
        key: 'root',
        storage,
        whitelist: [],
        blacklist: []
    }

    const middleware = [thunk]

    if (process.env.NODE_ENV !== 'production') middleware.push(logger);
    
    
    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = createStore(persistedReducer, applyMiddleware(...middleware))
    const persistor = persistStore(store)

    return {
        store,
        persistor
    }
}


export default configureStore
  
