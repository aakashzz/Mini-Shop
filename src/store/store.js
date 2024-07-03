import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from './features/asyncCategorySlice';
import selectCategoryReducer from './features/selectCategorySlice'
import productsReducer from './features/asyncAllProductsSlice'
import inputProductsReducer from './features/inputProductsSlice'

const store = configureStore({
    reducer: {
        category: categoryReducer,
        select: selectCategoryReducer,
        products: productsReducer,
        input: inputProductsReducer
}})

export default store;
