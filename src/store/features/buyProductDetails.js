import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: true,
    data:[],
}

const buyProductSlice = createSlice({
    name:'buyProduct',
    initialState,
    reducers:{
        addBuyingProductDetails: (state, action)=>{
            state.loading = false;
            state.data = [action.payload]
        },
        emptyBuyProductDetails: (state)=>{
            state.loading = true;
            state.data = [];
        }
    }
})
export default buyProductSlice.reducer;
export const {addBuyingProductDetails,emptyBuyProductDetails} = buyProductSlice.actions