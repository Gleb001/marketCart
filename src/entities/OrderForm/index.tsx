// imports =================================================== //
import { Button, FormLayoutGroup, FormStatus } from '@vkontakte/vkui';
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
    const cartItemsData = cartItemsStore.items;
    const idCartItems = orderStore.idCartItems;

    const [isLoading, setIsLoading] = useState(false);
    
    async function handleSubmit() {
        setIsLoading(true);
        await postOrder(order);
        setIsLoading(false);
    }

    const {
        order,
        totalPrice,
        totalBuyQuantities
    } = getOrderData(cartItemsData, idCartItems);



    const hasSelectedCartItems = (
        idCartItems.length === 0 &&
        cartItemsData !== null   &&
        cartItemsData.size !== 0
    );

    return (
        <form onSubmit={handleSubmit}>
            <FormLayoutGroup className={styles.order_form}>
                {
                    hasSelectedCartItems &&
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
                    disabled={idCartItems.length === 0}
                >
                    Перейти к оформлению
                </Button>
            </FormLayoutGroup>
        </form>
    );

};

// exports ================================================== //
export default observer(OrderForm);