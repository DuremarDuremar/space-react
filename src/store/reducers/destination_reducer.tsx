import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItemDistanation } from "../type";

interface State {
  loading: boolean;
  data: IItemDistanation[];
  error: string;
}

const initialStateAll: State = {
  loading: false,
  data: [] as IItemDistanation[],
  error: "",
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialStateAll,
  reducers: {
    destinationFetching(state) {
      state.loading = true;
    },
    destinationFetchingSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    destinationFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const destinationReducer = destinationSlice.reducer;
