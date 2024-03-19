// imports =================================================== //
import type { HeaderCartComponent } from "./types/index";
import SelectListProducts from '@features/SelectListProducts';
import styles from "./ui/style.module.css";
import {
    ButtonGroup,
    PanelHeader,
    Title
} from '@vkontakte/vkui';
import { observer } from 'mobx-react-lite';
import { useStore } from '@shared/store/store';
import RemoveCartItem from '@features/RemoveCartItem';

// main ====================================================== //
const HeaderCart: HeaderCartComponent = () => {

    const { cartItemsStore, orderStore } = useStore();
    const hasCartItems = Boolean(
        cartItemsStore.items &&
        cartItemsStore.items.size
    );
    const hasOrderCartItems = Boolean(
        orderStore.idCartItems.length
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
                        <RemoveCartItem mode='all' />
                    }
                </ButtonGroup>
            }
            delimiter="separator"
        />
    );
}

// exports ================================================== //
export default observer(HeaderCart);