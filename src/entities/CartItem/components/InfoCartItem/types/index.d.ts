// imports ================================================== //
import { CartItemData } from '@shared/types/product';
import type { FC } from 'react';

// main ===================================================== //
interface Props {
    title: CartItemData["title"],
    description: CartItemData["description"],
    price: CartItemData["price"],
    buyQuantities: CartItemData["buyQuantities"]
}
type InfoCartItemComponent = FC<Props>

// exports ================================================== //
export type { InfoCartItemComponent };