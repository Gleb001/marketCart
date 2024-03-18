// imports ================================================== //
import { CartItemData } from "./product";

// main ===================================================== //
// id            -> buy_quantities 
// идентификатор -> количество купленного товара
type Order = Map<CartItemData["id"], number>

// exports ================================================== //
export type { Order };