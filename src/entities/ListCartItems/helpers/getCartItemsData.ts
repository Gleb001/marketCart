// imports ================================================== //
import type { cartItemsStore } from "@shared/store/storages/cartItemsStore";
import { ProductData } from "@shared/types/product";

// types ==================================================== //
type getCartItems = (products: ProductData[]) => cartItemsStore;

// constants ================================================ //
const addData = {
    buyQuantities: 1,
    isSelect: false,
    description: "Описание товара"
}

// main ===================================================== //
const getCartItems: getCartItems = (products) => {

    let result: cartItemsStore = new Map();

    for (let product of products) {
        result.set(
            product.id,
            { ...product, ...addData }
        );
    }

    return result;

};

// exports ================================================= //
export default getCartItems;