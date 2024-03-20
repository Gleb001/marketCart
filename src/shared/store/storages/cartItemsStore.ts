// imports ================================================== //
import { makeAutoObservable } from "mobx";
import type { CartItemData } from "@shared/types/product";

// types ==================================================== //
type cartItemsStore = Map<CartItemData["id"], CartItemData>

// main ===================================================== //
class CartItemsStore {

    private _items: cartItemsStore | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get items() {
        return this._items;
    }

    setItems(value: cartItemsStore) {
        this._items = value;
    }

    remove(idCartItems: Array<CartItemData["id"]>) {
        if (this._items) {

            for (const id of idCartItems) {
                if (this._items.has(id)) {
                    this._items.delete(id);
                }
            }

        }
    }

    update(idCartItems: Array<CartItemData["id"]>, newProps: Partial<CartItemData>) {
        if (this._items) {

            for (const id of idCartItems) {
                if (this._items.has(id)) {
                    let currentItem = this._items.get(id)!;
                    for (let name in newProps) {
                        // @ts-ignore
                        currentItem[name] = newProps[name];
                    }
                    this._items.set(id, currentItem);
                }
            }

        }
    }

}

// exports ================================================== //
export type { cartItemsStore };
export default CartItemsStore;