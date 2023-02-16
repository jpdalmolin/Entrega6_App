import { productsTypes } from "../types";

const {SELECTED_PRODUCT,FILTER_PRODUCTS} =productsTypes;

export const selectProduct=(id) => ({
    type:SELECTED_PRODUCT,
    productId:id,
});

export const filterProducts=(id)=>({
    type:FILTER_PRODUCTS,
    categoryId:id,
})