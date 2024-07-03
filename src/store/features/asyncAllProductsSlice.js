import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";
const initialState = {
    loading: true,
    data: [],
    error: '',
}

export const fetchProductsDataAsync = createAsyncThunk('fetch/products', async () => {
    const response = await api.get('/products?limit=120');
    return response.data.products;
})

const allProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers :{

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProductsDataAsync.pending, (state, action) =>{
            state.loading = true;
            state.data = [];
            state.error= "";
        })
        .addCase(fetchProductsDataAsync.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error= "";
        })
        .addCase(fetchProductsDataAsync.rejected, (state, action) =>{
            state.loading = false;
            state.data = [];
            state.error= action.payload;
        })
    }
})

export default allProductsSlice.reducer;
