// imports =================================================== //
import { Group } from '@vkontakte/vkui';
import type { ListCartItemsComponent } from './types/index';
import { useStore } from '@shared/store/store';
import CartItem from '@entities/CartItem';
import styles from "./ui/styles.module.css";
import getProductsData from './api/getProductsData';
import getCartItems from './helpers/getCartItemsData';
import { observer } from 'mobx-react-lite';
import getValuesFromMap from '@shared/helpers/getArrayFromMap';

// main ====================================================== //
const ListCartItems: ListCartItemsComponent = () => {

    const { cartItemsStore } = useStore();
    if (cartItemsStore.items === null) {
        const productsData = getProductsData().products;
        // @ts-ignore
        cartItemsStore.setItems(
            getCartItems(productsData)
        );
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