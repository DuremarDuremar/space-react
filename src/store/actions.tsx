import axios from "axios";

import { TypeDispatch } from "./store";
import { destinationSlice } from "./reducers/destination_reducer";

export const fetchDestination = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch(destinationSlice.actions.destinationFetching());
    const res = await axios.get<any>(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,area,borders,region,cca3"
    );

    dispatch(destinationSlice.actions.destinationFetchingSuccess(res.data));
  } catch (e: any) {
    dispatch(destinationSlice.actions.destinationFetchingError(e.message));
  }
};
