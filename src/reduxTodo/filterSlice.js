import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilter: (state, action) => action.payload, 
    }
})

export const selectFilter = state => state.filter;

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;