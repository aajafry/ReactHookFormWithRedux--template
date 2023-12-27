import { createSlice } from "@reduxjs/toolkit";

export let formSlice = createSlice({
    name:"formState",
    initialState: [],
    reducers:{
        addedData: (state, action) => {
            state.push(action.payload);
        }
    }
});

export let { addedData } = formSlice.actions;
export default formSlice.reducer;