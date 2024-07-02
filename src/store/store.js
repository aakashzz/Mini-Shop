import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from './features/asyncCategorySlice';
import selectCategoryReducer from './features/asyncSelectCAtegorySlice'


const store = configureStore({
    reducer: {
        category: categoryReducer,
        select: selectCategoryReducer,
        
}})

export default store;
