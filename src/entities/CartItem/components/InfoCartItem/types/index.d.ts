// imports ================================================== //
import { CartItemData } from '@shared/types/product';
import type { FC } from 'react';

// main ===================================================== //
interface Props {
    title: CartItemData["title"],
    price: CartItemData["price"],
    description: CartItemData["description"],
    buyQuantities: CartItemData["buyQuantities"]
}
type InfoCartItemComponent = FC<Props>

// exports ================================================== //
export type { InfoCartItemComponent };