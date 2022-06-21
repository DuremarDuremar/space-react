import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { destinationReducer } from "./reducers/destination_reducer";
import { crewReducer } from "./reducers/crew_reducer";
import { technologyReducer } from "./reducers/technology_reducer";
import { userReducer } from "./reducers/user_reducer";

const rootReducer = combineReducers({
  destinationReducer,
  crewReducer,
  technologyReducer,
  userReducer,
});

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
