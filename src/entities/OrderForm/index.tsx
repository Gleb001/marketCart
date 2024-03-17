// imports =================================================== //
import { Group, FormStatus } from '@vkontakte/vkui';
import styles from './ui/styles.module.css';
import { ReactNode, useState } from "react";
import type { OrderFormComponent } from './types';
import SendOrder from '@features/SendOrder';
import { observer } from 'mobx-react-lite';
import { useStore } from '@shared/store/store';
import getOrderData from './helpers/getOrderData';

// main ====================================================== //
const OrderForm: OrderFormComponent = () => {

    const { cartItemsStore } = useStore();
    const [errorMessage, setErrorMessage] = useState<ReactNode | null>(null);
    const [totalPrice, totalQuantity] = getOrderData(cartItemsStore.items);

    function showErrorMessage() {
        setErrorMessage(
            <FormStatus header="Ошибка" mode="error">
                {"К сожалению, не удалось перейти к оформлению заказа :("}
            </FormStatus>
        );
        setTimeout(
            () => setErrorMessage(null),
            5000
        );
    }

    return (
        <Group separator="hide" mode='plain' className={styles.order_form}>
            {errorMessage}
            <div className={styles.order_details}>
                <span>Итого {totalQuantity} товар:</span>
                <span>{totalPrice} руб.</span>
            </div>
            <SendOrder showErrorMessage={showErrorMessage} />
        </Group>
    );

};

// exports ================================================== //
export default observer(OrderForm);