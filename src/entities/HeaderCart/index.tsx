// imports =================================================== //
import styles from './ui/styles.module.css';
import type { HeaderCartComponent } from "./types/index";
import SelectListProducts from '@features/SelectListProducts';
import { ButtonGroup, Separator, Title } from '@vkontakte/vkui';
import RemoveProduct from '@features/RemoveCartItem';
import { useStore } from '@shared/store/store';
import { observer } from 'mobx-react-lite';
import getStatusSelectorCartItems from './helpers/getStatusSelectorCartItems';

// main ====================================================== //
const HeaderCart: HeaderCartComponent = () => {

    const { cartItemsStore } = useStore();
    const statusSelector = getStatusSelectorCartItems(cartItemsStore.items);
    const hasCartItems = (
        cartItemsStore.items &&
        cartItemsStore.items.length > 0
    );

    return (
        <>
            <div className={styles.action_bar_cart}>
                <Title level="1">Корзина</Title>
                {
                    hasCartItems &&
                    <ButtonGroup align='right'>
                        <SelectListProducts isSelectAll={statusSelector !== "all"} />
                        {statusSelector !== "none" && <RemoveProduct mode='all' />}
                    </ButtonGroup>
                }
            </div>
            <Separator wide />
        </>
    );
}

// exports ================================================== //
export default observer(HeaderCart);