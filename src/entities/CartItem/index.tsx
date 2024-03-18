// imports =================================================== //
import { Cell, SimpleCell } from '@vkontakte/vkui';
import type { CartItemComponent } from './types/index';
import styles from "./ui/style.module.css";
import InfoCartItem from './components/InfoCartItem';
import { useStore } from '@shared/store/store';
import { action } from 'mobx';
import type { MouseEvent } from 'react';
import ActionBarCartItem from './components/ActionBarCartItem';

// main ====================================================== //
const CartItem: CartItemComponent = (props) => {

    const { id, title, price, buyQuantities, description, thumbnail, isSelect } = props;
    const { cartItemsStore, orderStore } = useStore();

    function handleClick(event: MouseEvent) {

        event.preventDefault();
        
        if (isSelect) {
            orderStore.idCartItems = orderStore.idCartItems.filter(idCart => idCart !== id);
        } else {
            orderStore.idCartItems.push(id);
        }

        cartItemsStore.update(
            [id],
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
                <Cell.Checkbox
                    checked={isSelect}
                    onChange={() => {}}
                    className={styles.checkbox_cart_item}
                />
                <img
                    className={styles.photo_cart_item}
                    src={thumbnail}
                    alt={title}
                />
                <div className={styles.content_cart_item}>
                    <InfoCartItem
                        title={title}
                        buyQuantities={buyQuantities}
                        description={description}
                        price={price}
                    />
                    <ActionBarCartItem id={id} />
                </div>
            </div>
        </SimpleCell>
    );

};

// exports ================================================== //
export default CartItem;