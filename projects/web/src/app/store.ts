import { combineSlices, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineSlices({})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

export default store
