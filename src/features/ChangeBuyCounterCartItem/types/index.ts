// imports ================================================== //
import { CartItemData } from '@shared/types/product';
import type {FC} from 'react';

// main ===================================================== //
interface Props {
    idCartItem: CartItemData["id"],
    buyQuantities: CartItemData["buy_quantity"]
}
type ChangeBuyCounterCartItemComponent = FC<Props>

// exports ================================================== //
export type { ChangeBuyCounterCartItemComponent };