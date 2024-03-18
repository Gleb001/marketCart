// imports ================================================== //
import { CartItemData } from '@shared/types/product';
import type { FC } from 'react';

// main ===================================================== //
interface Props {
    id: CartItemData["id"],
}
type ActionBarCartItemComponent = FC<Props>

// exports ================================================== //
export type { ActionBarCartItemComponent };