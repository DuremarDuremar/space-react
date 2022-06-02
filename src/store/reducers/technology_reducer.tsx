import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItemTechnology } from "../type";

interface State {
  loading: boolean;
  data: IItemTechnology[];
  error: string;
}

const initialState: State = {
  loading: false,
  data: [] as IItemTechnology[],
  error: "",
};

export const technologySlice = createSlice({
  name: "technology",
  initialState: initialState,
  reducers: {
    technologyFetching(state) {
      state.loading = true;
    },
    technologyFetchingSuccess(state, action: PayloadAction<IItemTechnology[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    technologyFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const technologyReducer = technologySlice.reducer;
