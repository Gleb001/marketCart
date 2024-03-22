// imports ================================================== //
import CartItemsStore from "@shared/store/storages/cartItemsStore";

// types ==================================================== //
type hasCartItems = (cartItems: CartItemsStore["items"]) => boolean

// main ===================================================== //
const hasCartItems: hasCartItems = (cartItems) => (
    cartItems !== null && cartItems.size !== 0
);

// exports ================================================= //
export default hasCartItems;