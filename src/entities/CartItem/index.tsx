// imports =================================================== //
import { Checkbox, SimpleCell } from '@vkontakte/vkui';
import type { CartItemComponent } from './types/index';
import styles from "./ui/style.module.css";
import InfoCartItem from './components/InfoCartItem';
import { useStore } from '@shared/store/store';
import type { MouseEvent } from 'react';
import ActionBarCartItem from './components/ActionBarCartItem';
import { action } from 'mobx';

// main ====================================================== //
const CartItem: CartItemComponent = (props) => {

    const { id, title, price, buyQuantities, description, thumbnail, isSelect } = props;
    const { cartItemsStore, orderStore } = useStore();

    function handleClick(event: MouseEvent) {

        event.preventDefault();

        if (isSelect) {
            orderStore.idCartItems = orderStore.idCartItems.filter(
                idCart => idCart !== id
            );
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
                <Checkbox
                    checked={isSelect}
                    className={styles.checkbox_cart_item}
                />
                <img
                    alt={title}
                    src={thumbnail}
                    className={styles.photo_cart_item}
                />
                <div className={styles.content_cart_item}>
                    <InfoCartItem
                        price={price}
                        title={title}
                        description={description}
                        buyQuantities={buyQuantities}
                    />
                    <ActionBarCartItem id={id} />
                </div>
            </div>
        </SimpleCell>
    );

};

// exports ================================================== //
export default CartItem;