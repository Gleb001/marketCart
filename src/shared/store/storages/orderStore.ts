// imports ================================================== //
import { CartItemData } from "@shared/types/product";
import { makeAutoObservable } from "mobx";

// types ==================================================== //
type idCartItemsStore = CartItemData["id"][]
interface initialStore {
    idCartItems: idCartItemsStore
}

// main ===================================================== //
function orderStore() {
    return makeAutoObservable<initialStore>({
        idCartItems: []
    });
}

// exports ================================================== //
export type { idCartItemsStore };
export default orderStore;