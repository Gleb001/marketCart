// imports ================================================== //
import { CartItemData, ProductData } from "@shared/types/product";

// types ==================================================== //
type getCartItemsData = (products: ProductData[]) => CartItemData[];

// main ===================================================== //
const getCartItemsData: getCartItemsData = (products) => {
    return products.map(
        product => (
            {
                ...product,
                buy_quantity: 1,
                isSelect: false
            }
        )
    );
};

// exports ================================================= //
export default getCartItemsData;