// imports ================================================== //
import type { CartItemData } from "@shared/types/product";

// types ==================================================== //
type getSelectDataCartItems = (
    total: CartItemData["id"][],
    selected: CartItemData["id"][]
) => [CartItemData["id"][], boolean]

// main ===================================================== //
const getSelectDataCartItems: getSelectDataCartItems = (total, selected) => {

    const isSelect = true;

    if (total.length === selected.length) {
        return [ total, !isSelect ];
    }

    if (selected.length === 0) {
        return [ total, isSelect ];
    }

    return [
        total.filter(id => !selected.includes(id)),
        isSelect
    ];

};

// exports ================================================= //
export default getSelectDataCartItems;