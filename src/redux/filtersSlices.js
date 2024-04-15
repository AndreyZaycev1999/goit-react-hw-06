import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filter: '',
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload
        }
    }
})

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;