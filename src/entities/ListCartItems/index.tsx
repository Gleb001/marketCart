// imports =================================================== //
import { Group } from '@vkontakte/vkui';
import type { ListCartItemsComponent } from './types/index';
import { useStore } from '@shared/store/store';
import CartItem from '@entities/CartItem';
import styles from "./ui/styles.module.css";
import getProductsData from './api/getProductsData';
import getCartItemsData from './helpers/getCartItemsData';
import { observer } from 'mobx-react-lite';

// main ====================================================== //
const ListCartItems: ListCartItemsComponent = () => {

    const { cartItemsStore } = useStore();
    if (cartItemsStore.items === null) {
        const productsData = getProductsData().products;
        cartItemsStore.setItems(
            getCartItemsData(productsData)
        );
    }

    let hasCartItems = (
        cartItemsStore.items !== null &&
        cartItemsStore.items.length > 0
    );

    return (
        <Group mode="plain" className={styles.container_cart_items}>
            {hasCartItems && cartItemsStore.items!.map(item => <CartItem key={item.id} {...item} />)}
            {!hasCartItems && <p>У вас нет товаров в корзине!</p>}
        </Group>
    );

}

// exports ================================================== //
export default observer(ListCartItems);