// imports =================================================== //
import styles from './ui/styles.module.css';
import type { HeaderCartComponent } from "./types/index";
import SelectListProducts from '@features/SelectListProducts';
import {
    ButtonGroup,
    FixedLayout,
    Separator,
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

    return (
        <FixedLayout vertical="top">
            <div className={styles.header_cart}>
                <Title level="1">Корзина</Title>
                {
                    hasCartItems &&
                    <ButtonGroup>
                        <SelectListProducts />
                        {orderStore.idCartItems.length > 0 && <RemoveCartItem mode='all' />}
                    </ButtonGroup>
                }
            </div>
            <Separator wide />
        </FixedLayout>
    );
}

// exports ================================================== //
export default observer(HeaderCart);