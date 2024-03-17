import { CartItemData } from "@shared/types/product";

// types ==================================================== //
type getOrderData = (cartItems: CartItemData[] | null) => [number, number];

// main ===================================================== //
const getOrderData: getOrderData = (cartItems) => {

    let totalPrice = 0;
    let totalQuantity = 0;
    if (cartItems) {
        for (const cartItem of cartItems) {
            if (cartItem.isSelect) {
                totalPrice += (cartItem.buy_quantity * cartItem.price);
                totalQuantity += cartItem.buy_quantity;
            }
        }
    }
    
    return [totalPrice, totalQuantity];

}

// exports ================================================= //
export default getOrderData;