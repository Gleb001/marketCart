// imports ================================================== //
import type {FC} from 'react';

// main ===================================================== //
interface Props {
    title: string,
    description?: string,
    price: number,
    buy_quantities: number
}
type InfoCartItemComponent = FC<Props>

// exports ================================================== //
export type { InfoCartItemComponent };