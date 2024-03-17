// main ===================================================== //
interface ProductData {
    id: number,
    title: string,
    // description: string,
    price: number,
    quantity: number, // total_quantity
    thumbnail: string, // image
}
interface CartItemData extends ProductData {
    buy_quantity: number,
    isSelect: boolean,
}

// exports ================================================== //
export type { ProductData, CartItemData };