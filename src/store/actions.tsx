import axios from "axios";

import { TypeDispatch } from "./store";
import { destinationSlice } from "./reducers/destination_reducer";
import { crewSlice } from "./reducers/crew_reducer";
import { technologySlice } from "./reducers/technology_reducer";
import { IItemDistanation, IItemCrew, IItemTechnology } from "./type";

export const fetchDestination = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch(destinationSlice.actions.destinationFetching());
    const res = await axios.get<IItemDistanation[]>(
      `http://localhost:3001/destinations`
    );
    setTimeout(
      () =>
        dispatch(destinationSlice.actions.destinationFetchingSuccess(res.data)),
      2000
    );
  } catch (e: any) {
    dispatch(destinationSlice.actions.destinationFetchingError(e.message));
  }
};

export const fetchCrew = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch(crewSlice.actions.crewFetching());
    const res = await axios.get<IItemCrew[]>(`http://localhost:3001/crew`);
    setTimeout(
      () => dispatch(crewSlice.actions.crewFetchingSuccess(res.data)),
      2000
    );
  } catch (e: any) {
    dispatch(crewSlice.actions.crewFetchingError(e.message));
  }
};

export const fetchTechnology = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch(technologySlice.actions.technologyFetching());
    const res = await axios.get<IItemTechnology[]>(
      `http://localhost:3001/dtechnology`
    );
    setTimeout(
      () =>
        dispatch(technologySlice.actions.technologyFetchingSuccess(res.data)),
      2000
    );
  } catch (e: any) {
    dispatch(technologySlice.actions.technologyFetchingError(e.message));
  }
};
