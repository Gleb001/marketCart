// imports =================================================== //
import { Group, Separator } from '@vkontakte/vkui';
import type { ListCartItemsComponent } from './types/index';
import { useStore } from '@shared/store/store';
import CartItem from '@entities/CartItem';
import styles from "./ui/styles.module.css";
import getProductsData from './api/getProductsData';
import getCartItems from './helpers/getCartItemsData';
import getValuesFromMap from '@shared/helpers/getArrayFromMap';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import hasCartItems from '@shared/helpers/hasCartItems';

// main ====================================================== //
const ListCartItems: ListCartItemsComponent = () => {

    const { cartItemsStore } = useStore();
    if (cartItemsStore.items === null) {
        const productsData = getProductsData().products;
        const cartItems = getCartItems(productsData);
        runInAction(() => cartItemsStore.setItems(cartItems));
    }

    return (
        <Group mode="plain" className={styles.container_cart_items}>
            {
                hasCartItems(cartItemsStore.items) &&
                getValuesFromMap(cartItemsStore.items!).map(
                    item => (
                        <>
                            <CartItem key={item.id} {...item} />
                            <Separator wide style={{ width: "100%" }} />
                        </>
                    )
                )
            }
            {
                !hasCartItems(cartItemsStore.items) &&
                <p>У вас нет товаров в корзине!</p>
            }
        </Group>
    );

};

// exports ================================================== //
export default observer(ListCartItems);