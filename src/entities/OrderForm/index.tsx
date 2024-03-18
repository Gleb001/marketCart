// imports =================================================== //
import {
    Button,
    FormLayoutGroup,
    FormStatus
} from '@vkontakte/vkui';
import styles from './ui/styles.module.css';
import type { OrderFormComponent } from './types';
import { useStore } from '@shared/store/store';
import { useState } from "react";
import { observer } from 'mobx-react-lite';
import OrderDetails from './components/OrderDetails';
import postOrder from './api/postOrder';
import getOrderData from './helpers/getOrderData';

// main ====================================================== //
const OrderForm: OrderFormComponent = () => {

    const { cartItemsStore, orderStore } = useStore();
    const cartItemsData = cartItemsStore.items!;
    const idCartItems = orderStore.idCartItems;

    const [isLoading, setIsLoading] = useState(false);

    const {
        order,
        totalPrice,
        totalBuyQuantities
    } = getOrderData(cartItemsData, idCartItems);

    async function handleSubmit() {
        setIsLoading(true);
        await postOrder(order);
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormLayoutGroup className={styles.order_form}>
                {
                    !idCartItems.length &&
                    <FormStatus mode="default">
                        Выберите товары, которые собираетесь заказать
                    </FormStatus>
                }
                <OrderDetails
                    totalPrice={totalPrice}
                    totalBuyQuantities={totalBuyQuantities}
                />
                <Button
                    stretched
                    size='m'
                    type='submit'
                    loading={isLoading}
                    disabled={!idCartItems.length}
                >
                    Перейти к оформлению
                </Button>
            </FormLayoutGroup>
        </form>
    );

};

// exports ================================================== //
export default observer(OrderForm);