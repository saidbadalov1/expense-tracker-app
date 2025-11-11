import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userApi";
import { expencesApi } from "./services/expencesApi";
import formReducer from "./features/form.slice";
import expencesReducer from "./features/expences.slice";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [expencesApi.reducerPath]: expencesApi.reducer,
    form: formReducer,
    expences: expencesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware, expencesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
