import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data: [],
    error:'',
}

const inputSlice = createSlice({
    name:"input",
    initialState,
    reducers:{
        fetchDataProducts: (state, action) => {
            state.loading = false,
            state.data = action.payload;
            
        },
        emptyDataProducts: (state,action) =>{
            state.loading = true,
            state.data = [];
            
        }
    }
})

export default inputSlice.reducer;
export const {fetchDataProducts,emptyDataProducts} = inputSlice.actions;