// imports ================================================== //
import { makeObservable, observable, action } from "mobx";
import type { CartItemData } from "@shared/types/product";

// main ===================================================== //
class CartItemsStore {

    items: CartItemData[] | null = null;

    constructor() {
        makeObservable(this, {
            setProps: action,
            items: observable,
            setItems: action,
            removeItemsById: action,
            removeItemsByIsSelect: action,
        });
    }

    setItems(new_items: CartItemData[]) {
        this.items = new_items;
    }

    removeItemsById(idItems: Set<CartItemData["id"]>) {
        if (this.items) {
            this.items = this.items.filter(
                item => !idItems.has(item.id)
            );
        }
    }

    removeItemsByIsSelect() {
        if (this.items) {
            this.items = this.items.filter(
                item => !item.isSelect
            );
        }
    }

    setProps(idItems: Set<CartItemData["id"]> | "all", newProps: Partial<CartItemData>) {
        if (this.items) {
            this.items = this.items.map(item => {
                if (idItems === "all" || idItems.has(item.id)) {
                    for (const nameNewProp in newProps) {
                        // @ts-ignore
                        item[nameNewProp] = newProps[nameNewProp];
                    }
                }
                return item;
            });
        }
    }

}

// exports ================================================== //
export default CartItemsStore;