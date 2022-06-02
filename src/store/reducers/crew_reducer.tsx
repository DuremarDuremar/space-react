import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItemCrew } from "../type";

interface State {
  loading: boolean;
  data: IItemCrew[];
  error: string;
}

const initialState: State = {
  loading: false,
  data: [] as IItemCrew[],
  error: "",
};

export const crewSlice = createSlice({
  name: "crew",
  initialState: initialState,
  reducers: {
    crewFetching(state) {
      state.loading = true;
    },
    crewFetchingSuccess(state, action: PayloadAction<IItemCrew[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    crewFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const crewReducer = crewSlice.reducer;
