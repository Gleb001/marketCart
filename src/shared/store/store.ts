// imports ================================================== //
import { createContext, useContext } from "react";
import CartItemsStore from "./storages/cartItemsStore";
import orderStore from "./storages/orderStore";

// main ===================================================== //
let store = {
    cartItemsStore: new CartItemsStore(),
    orderStore: orderStore()
};
const StoreContext = createContext(store);
const useStore = () => useContext<typeof store>(StoreContext);

// exports ================================================= //
export { useStore, StoreContext };
export default store;