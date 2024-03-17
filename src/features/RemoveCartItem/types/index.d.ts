// imports ================================================== //
import { CartItemData } from '@shared/types/product';
import type {FC} from 'react';

// main ===================================================== //
interface Props {
    mode?: "all",
    idCartItem?: CartItemData["id"]
}
type RemoveCartItemComponent = FC<Props>

// exports ================================================== //
export type { RemoveCartItemComponent };