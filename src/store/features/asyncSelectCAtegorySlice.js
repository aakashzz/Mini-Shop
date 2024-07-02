import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading: true,
    data: [],
} 

const selectCategorySlice = createSlice({
    name:'select',
    initialState,
    reducers:{
        showCategory: function(state, action){
            state.loading = false;
            state.data = action.payload
        },
        emptyCategory: function(state){
            state.loading = true;
            state.data = [];
        }
    }
})

export default selectCategorySlice.reducer;
export const {showCategory, emptyCategory} = selectCategorySlice.actions