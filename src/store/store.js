import { configureStore } from '@reduxjs/toolkit';
import monitorReducerEnhancer from './enhancers/monitor';
import loggerMiddleware from './middleware/logger';
import { rootReducer } from './reducers';

export default function configureAppStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(loggerMiddleware),
        enhancers: [monitorReducerEnhancer],
        devTools: process.env.NODE_ENV !== 'production',
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
    }
    return store
}