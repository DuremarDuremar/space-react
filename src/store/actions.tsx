import axios from "axios";

import { TypeDispatch } from "./store";
import { destinationSlice } from "./reducers/destination_reducer";
import { IItemDistanation } from "./type";

export const fetchDestination =
  (link: string) => async (dispatch: TypeDispatch) => {
    try {
      dispatch(destinationSlice.actions.destinationFetching());
      const res = await axios.get<IItemDistanation[]>(
        `http://localhost:3001/${link}`
      );

      dispatch(destinationSlice.actions.destinationFetchingSuccess(res.data));
    } catch (e: any) {
      dispatch(destinationSlice.actions.destinationFetchingError(e.message));
    }
  };
