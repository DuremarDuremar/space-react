import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  loading: boolean;
  data: [];
  error: string;
}

const initialStateAll: State = {
  loading: false,
  data: [],
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
