// imports ================================================== //
import type { cartItemsStore } from "@shared/store/storages/cartItemsStore";
import type { idCartItemsStore } from "@shared/store/storages/orderStore";
import type { Order } from "@shared/types/order";

// types ==================================================== //
type OrderData = {
    order: Order,
    totalPrice: number,
    totalBuyQuantities: number
}
type getOrderData = (
    cartItems: cartItemsStore | null,
    idCartItems: idCartItemsStore 
) => OrderData

// main ===================================================== //
const getOrderData: getOrderData = (cartItems, idCartItems) => {

    let totalPrice = 0;
    let totalBuyQuantities = 0;
    let order: Order = new Map();

    if (cartItems) {

        for (let id of idCartItems) {

            const cartItem = cartItems.get(id);
            if (cartItem) {
                if (cartItem.isSelect) {
                    totalPrice += (cartItem.buyQuantities * cartItem.price);
                    totalBuyQuantities += cartItem.buyQuantities;
                }
                order.set(id, cartItem.buyQuantities);
            }
    
        }

    }

    return { order, totalPrice, totalBuyQuantities };
    
};

// exports ================================================= //
export default getOrderData;