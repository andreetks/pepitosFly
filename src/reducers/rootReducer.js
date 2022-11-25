import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { itemsReducer } from "./itemsReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer
})