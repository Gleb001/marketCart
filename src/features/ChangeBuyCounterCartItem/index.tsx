// imports =================================================== //
import type { ChangeBuyCounterCartItemComponent } from './types/index.d.ts';
import { MouseEvent, useRef } from 'react';
import styles from "./ui/styles.module.css";
import { useStore } from '@shared/store/store';
import { action } from 'mobx';

// main ====================================================== //
const ChangeBuyCounterCartItem: ChangeBuyCounterCartItemComponent = (props) => {

    const { idCartItem, buyQuantities } = props;
    const { cartItemsStore } = useStore();
    const minBuyQuantities = 1;
    const maxBuyQuantities = 10;
    let InputRef = useRef<HTMLInputElement>();

    function stepDown(event: MouseEvent) {
        event.stopPropagation();
        if (InputRef.current && buyQuantities > minBuyQuantities) {
            InputRef.current.stepDown();
            cartItemsStore.setProps(
                new Set([idCartItem]),
                { buy_quantity: buyQuantities - 1 }
            );
        }
    }
    function stepUp(event: MouseEvent) {
        event.stopPropagation();
        if (InputRef.current && buyQuantities < maxBuyQuantities) {
            InputRef.current!.stepUp();
            cartItemsStore.setProps(
                new Set([idCartItem]),
                { buy_quantity: buyQuantities + 1 }
            );
        }
    }

    return (
        <div className={styles.buy_counter}>
            <button onClick={action(stepDown)}>
                -
            </button>
            <input
                type="number"
                disabled
                // @ts-ignore 
                ref={InputRef}
                min={minBuyQuantities}
                max={maxBuyQuantities}
                value={buyQuantities}
                className={styles.field_num}
            />
            <button onClick={action(stepUp)}>
                +
            </button>
        </div>
    );

}

// exports ================================================== //
export default ChangeBuyCounterCartItem;