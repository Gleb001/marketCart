import { CartItemData } from "@shared/types/product";

// types ==================================================== //
type StatusSelector = "none" | "all" | "any"
type getStatusSelectorCartItems = (items: CartItemData[] | null) => StatusSelector

// main ===================================================== //
const getStatusSelectorCartItems: getStatusSelectorCartItems = (items) => {

    if (!items) return "none";

    const counterSelectItems = items.reduce(
        (acc, item) => acc + Number(item.isSelect),
        0
    );

    if (counterSelectItems === 0) {
        return "none";
    } else if (counterSelectItems !== items.length) {
        return "any";
    } else {
        return "all";
    }

    
};

// exports ================================================= //
export default getStatusSelectorCartItems;