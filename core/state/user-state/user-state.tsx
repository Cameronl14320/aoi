import { createAsyncThunk, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

export interface UserState {
    uid?: string | undefined
};

export const initialUserState: UserState = {
    uid: undefined
};

export const userStateSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUid: (state, action: PayloadAction<string | undefined>) => {
            state.uid = action.payload;
        }
    }
});

export const { setUid } = userStateSlice.actions;

export default userStateSlice.reducer;