import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from './features/asyncCategorySlice';

const store = configureStore({
    reducer: {
        category: categoryReducer
    }
})

export default store;
