import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";

const initialState = {
   data: [],
   error: "",
   loading: true,
};

export const fetchDataAsync = createAsyncThunk("fetch/data", async () => {
   const dataResponse = await api.get("/products/category/fragrances?limit=5");
   console.log(dataResponse.data.products)
   return dataResponse.data.products;
});

const categorySlice = createSlice({
   name: "category",
   initialState,
   reducers: {
   
   },
   extraReducers: (builder) => { 
      builder
         .addCase(fetchDataAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchDataAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
         })
         .addCase(fetchDataAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   },
});

export default categorySlice.reducer;