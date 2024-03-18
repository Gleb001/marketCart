// imports ================================================== //
import type { FC } from 'react';

// main ===================================================== //
interface Props {
    totalPrice: number,
    totalBuyQuantities: number
}
type OrderDetailsComponent = FC<Props>

// exports ================================================== //
export type { OrderDetailsComponent };