import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { destinationReducer } from "./reducers/destination_reducer";

const rootReducer = combineReducers({ destinationReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: "",
        },
      }).concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type TypeStore = ReturnType<typeof setupStore>;
export type TypeDispatch = TypeStore["dispatch"];
