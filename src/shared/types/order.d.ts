// imports ================================================== //
import { CartItemData } from "./product";

// main ===================================================== //
// id            -> buyQuantities 
// идентификатор -> количество купленного товара
type Order = Map<CartItemData["id"], number>

// exports ================================================== //
export type { Order };