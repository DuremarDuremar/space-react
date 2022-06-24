import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
  name: string | null;
}

const initialStateUser: UserState = {
  email: null,
  token: null,
  id: null,
  name: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
    },
  },
});

export const userReducer = userSlice.reducer;
