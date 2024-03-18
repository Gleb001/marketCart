// main ===================================================== //
interface ProductData {
    id: string,
    title: string,
    price: number,
    quantity: number,
    thumbnail: string,
}
interface CartItemData extends ProductData {
    buyQuantities: number,
    isSelect: boolean,
    description: string
}

// exports ================================================== //
export type { ProductData, CartItemData };