// imports =================================================== //
import { ButtonGroup, Cell, SimpleCell } from '@vkontakte/vkui';
import type { CartItemComponent } from './types/index';
import styles from "./ui/style.module.css";
import RemoveProduct from '@features/RemoveCartItem';
import InfoCartItem from './components/InfoCartItem';
import ChangeBuyCounterCartItem from '@features/ChangeBuyCounterCartItem';
import { useStore } from '@shared/store/store';
import { action } from 'mobx';
import { useState, type MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';

// main ====================================================== //
const CartItem: CartItemComponent = (props) => {

    const { id, title, price, buy_quantity, quantity, thumbnail, isSelect } = props;
    const { cartItemsStore } = useStore();

    function handleClick(event: MouseEvent) {
        event.preventDefault();
        cartItemsStore.setProps(
            new Set([id]),
            { isSelect: !isSelect }
        );
    }

    return (
        <SimpleCell
            Component="label"
            className={styles.cell}
            activated={isSelect}
            onClick={action(handleClick)}
        >
            <div className={styles.cart_item}>
                <Cell.Checkbox checked={isSelect} className={styles.checkbox_cart_item} />
                <img className={styles.photo_cart_item} src={thumbnail} alt={title} />
                <div className={styles.content_cart_item}>
                    <InfoCartItem
                        title={title}
                        buy_quantities={buy_quantity}
                        price={price}
                    />
                    <ButtonGroup mode="horizontal">
                        <ChangeBuyCounterCartItem
                            idCartItem={id}
                            buyQuantities={buy_quantity}
                        />
                        <RemoveProduct
                            idCartItem={id}
                        />
                    </ButtonGroup>
                </div>
            </div>
        </SimpleCell>
    );

}

// exports ================================================== //
export default observer(CartItem);