import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})
export default store;

export type  AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;