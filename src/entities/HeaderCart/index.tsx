// imports =================================================== //
import styles from "./ui/style.module.css";
import SelectListProducts from '@features/SelectListProducts';
import { ButtonGroup, PanelHeader, Title } from '@vkontakte/vkui';
import RemoveCartItem from '@features/RemoveCartItem';
import { observer } from 'mobx-react-lite';
import { useStore } from '@shared/store/store';
import type { HeaderCartComponent } from "./types/index";

// main ====================================================== //
const HeaderCart: HeaderCartComponent = () => {

    const { cartItemsStore, orderStore } = useStore();
    const hasCartItems = (
        cartItemsStore.items !== null &&
        cartItemsStore.items.size !== 0
    );
    const hasOrderCartItems = (
        orderStore.idCartItems.length !== 0
    );

    return (
        <PanelHeader
            className={styles.header_cart}
            before={
                <Title level="1">
                    Корзина
                </Title>
            }
            after={
                hasCartItems &&
                <ButtonGroup>
                    <SelectListProducts />
                    {
                        hasOrderCartItems &&
                        <RemoveCartItem mode="all"/>
                    }
                </ButtonGroup>
            }
            delimiter="separator"
        />
    );

}

// exports ================================================== //
export default observer(HeaderCart);