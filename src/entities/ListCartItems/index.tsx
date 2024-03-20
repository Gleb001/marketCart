// imports =================================================== //
import { Group } from '@vkontakte/vkui';
import type { ListCartItemsComponent } from './types/index';
import { useStore } from '@shared/store/store';
import CartItem from '@entities/CartItem';
import styles from "./ui/styles.module.css";
import getProductsData from './api/getProductsData';
import getCartItems from './helpers/getCartItemsData';
import getValuesFromMap from '@shared/helpers/getArrayFromMap';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';

// main ====================================================== //
const ListCartItems: ListCartItemsComponent = () => {

    const { cartItemsStore } = useStore();
    if (cartItemsStore.items === null) {
        const productsData = getProductsData().products;
        const cartItems = getCartItems(productsData);
        runInAction(() => cartItemsStore.setItems(cartItems));
    }

    const hasCartItems = (
        cartItemsStore.items !== null &&
        cartItemsStore.items.size !== 0
    );

    return (
        <Group mode="plain" className={styles.container_cart_items}>
            {
                hasCartItems &&
                getValuesFromMap(cartItemsStore.items).map(
                    item => <CartItem key={item.id} {...item} />
                )
            }
            {
                !hasCartItems &&
                <p>У вас нет товаров в корзине!</p>
            }
        </Group>
    );

};

// exports ================================================== //
export default observer(ListCartItems);