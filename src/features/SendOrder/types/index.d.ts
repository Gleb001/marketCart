// imports ================================================== //
import type {FC} from 'react';

// main ===================================================== //
interface Props {
    showErrorMessage?: () => void
}
type SendOrderComponent = FC<Props>

// exports ================================================== //
export type { SendOrderComponent };