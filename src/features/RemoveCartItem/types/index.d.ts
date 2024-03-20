// imports ================================================== //
import { CartItemData } from '@shared/types/product';
import type {FC} from 'react';

// main ===================================================== //
interface RemoveAllProps {
    mode: "all",
    id?: CartItemData["id"]
}
interface RemoveByIdProps {
    mode?: "all",
    id: CartItemData["id"]
}
type RemoveCartItemComponent = FC<RemoveAllProps | RemoveByIdProps>

// exports ================================================== //
export type { RemoveCartItemComponent };