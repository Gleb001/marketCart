// imports ================================================== //
import { createContext, useContext } from "react";
import CartItemsStore from "./storages/cartItemsStore";

// main ===================================================== //
let store = {
    cartItemsStore: new CartItemsStore(),
};
const StoreContext = createContext(store);
const useStore = () => useContext<typeof store>(StoreContext);

// exports ================================================= //
export { useStore, StoreContext };
export default store;