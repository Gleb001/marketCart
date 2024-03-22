// imports =================================================== //
import styles from "./ui/style.module.css";
import SelectListProducts from '@features/SelectListProducts';
import { ButtonGroup, PanelHeader, Title } from '@vkontakte/vkui';
import RemoveCartItem from '@features/RemoveCartItem';
import { observer } from 'mobx-react-lite';
import { useStore } from '@shared/store/store';
import type { HeaderCartComponent } from "./types/index";
import hasCartItems from "@shared/helpers/hasCartItems";

// main ====================================================== //
const HeaderCart: HeaderCartComponent = () => {

    const { cartItemsStore, orderStore } = useStore();

    return (
        <PanelHeader
            className={styles.header_cart}
            before={
                <Title level="1">
                    Корзина
                </Title>
            }
            after={
                hasCartItems(cartItemsStore.items) &&
                <ButtonGroup>
                    <SelectListProducts />
                    {
                        orderStore.idCartItems.length !== 0 &&
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