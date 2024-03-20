// imports =================================================== //
import type { ChangeBuyCounterCartItemComponent } from './types/index.d.ts';
import { MouseEvent, useRef } from 'react';
import styles from "./ui/styles.module.css";
import { useStore } from '@shared/store/store';

// main ====================================================== //
const ChangeBuyCounterCartItem: ChangeBuyCounterCartItemComponent = (props) => {

    const { id } = props;
    const { cartItemsStore } = useStore();
    const buyQuantities = cartItemsStore.items!.get(id)!.buyQuantities;

    const min = 1;
    const max = 10;
    let InputRef = useRef<HTMLInputElement>(null);

    function stepDown(event: MouseEvent) {
        event.stopPropagation();
        InputRef.current!.stepDown();
        updateCartItem();
    }
    function stepUp(event: MouseEvent) {
        event.stopPropagation();
        InputRef.current!.stepUp();
        updateCartItem();
    }
    function updateCartItem() {
        cartItemsStore.update(
            [id],
            { buyQuantities: Number(InputRef.current!.value) }
        );
    }

    return (
        <div className={styles.buy_counter}>
            <button
                disabled={min === buyQuantities} 
                onClick={stepDown}
                className={styles.arrow_buy_counter}
            >
                -
            </button>
            <input
                disabled
                type="number"
                ref={InputRef}
                min={min}
                max={max}
                value={buyQuantities}
                className={styles.field_num}
            />
            <button
                disabled={max === buyQuantities} 
                onClick={stepUp}
                className={styles.arrow_buy_counter}
            >
                +
            </button>
        </div>
    );

};

// exports ================================================== //
export default ChangeBuyCounterCartItem;